import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') ?? ''
    const FROM_EMAIL    = Deno.env.get('FROM_EMAIL') ?? 'quotes@chasingdreamsevents.com'
    const FROM_NAME     = 'Chasing Dreams Events'

    const authHeader = req.headers.get('Authorization')
    if (!authHeader) return jsonRes({ error: 'Unauthorized' }, 401)

    // User-scoped client (respects RLS — used for reading the quotation)
    const userSupabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } }
    )

    // Service-role client (bypasses RLS — used for writing logs + updating quotation)
    const adminSupabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    const { quotation_id } = await req.json()
    if (!quotation_id) return jsonRes({ error: 'quotation_id required' }, 400)

    // Load quotation with items (RLS ensures only the owner can access it)
    const { data: quotation, error: qErr } = await userSupabase
      .from('quotations')
      .select('*, quotation_items (*)')
      .eq('id', quotation_id)
      .single()

    if (qErr || !quotation) return jsonRes({ error: 'Quotation not found' }, 404)

    const toEmail = quotation.customer_email
    if (!toEmail) return jsonRes({ error: 'Quotation has no customer email address' }, 400)

    const html = buildEmailHTML(quotation)

    // Send via Resend
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        to: toEmail,
        subject: `Your Quotation ${quotation.reference} — ${FROM_NAME}`,
        html,
      }),
    })

    const deliveryOk     = resendRes.ok
    const deliveryStatus = deliveryOk ? 'sent' : 'failed'
    const errorMessage   = deliveryOk ? null : await resendRes.text()

    // Log delivery
    await adminSupabase.from('quotation_emails').insert({
      quotation_id,
      sent_to: toEmail,
      status: deliveryStatus,
      error_message: errorMessage,
    })

    if (!deliveryOk) {
      return jsonRes({ error: 'Email delivery failed', detail: errorMessage }, 502)
    }

    // Update last_sent fields on quotation
    await adminSupabase
      .from('quotations')
      .update({ last_sent_at: new Date().toISOString(), last_sent_to: toEmail })
      .eq('id', quotation_id)

    return jsonRes({ success: true, reference: quotation.reference })

  } catch (err) {
    return jsonRes({ error: String(err) }, 500)
  }
})

function jsonRes(body: object, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

function fmt(val: number | string): string {
  const n = parseFloat(String(val)) || 0
  return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function buildEmailHTML(q: any): string {
  const items = (q.quotation_items || []).sort((a: any, b: any) => a.sort_order - b.sort_order)

  const rows = items.map((item: any) => `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #f1f3f5;font-size:14px;color:#333;">${item.item_name}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #f1f3f5;text-align:center;font-size:14px;color:#333;">${item.quantity}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #f1f3f5;text-align:right;font-size:14px;color:#333;">${fmt(item.unit_price)}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #f1f3f5;text-align:right;font-size:14px;font-weight:600;color:#1a1a2e;">${fmt(item.subtotal)}</td>
    </tr>
  `).join('')

  const customerName = q.customer_name || 'Valued Customer'
  const createdDate  = new Date(q.created_at).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Quotation ${q.reference}</title>
</head>
<body style="margin:0;padding:0;background:#f8f9fa;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fa;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr><td style="background:#1a1a2e;padding:32px 40px;text-align:center;">
          <div style="font-size:22px;font-weight:700;color:#fff;">Chasing Dreams Events</div>
          <div style="font-size:13px;color:#4ECDC4;margin-top:4px;">Westchester County, NY</div>
        </td></tr>

        <!-- Reference + Date -->
        <tr><td style="padding:32px 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <div style="font-size:11px;font-weight:600;color:#6c757d;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Quotation</div>
                <div style="font-family:'Courier New',monospace;font-size:24px;font-weight:700;color:#1a1a2e;">${q.reference}</div>
              </td>
              <td style="text-align:right;vertical-align:top;">
                <div style="font-size:11px;font-weight:600;color:#6c757d;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Date</div>
                <div style="font-size:14px;color:#1a1a2e;">${createdDate}</div>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Customer -->
        <tr><td style="padding:24px 40px 0;">
          <div style="font-size:11px;font-weight:600;color:#6c757d;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Prepared for</div>
          <div style="font-size:16px;font-weight:600;color:#1a1a2e;">${customerName}</div>
          ${q.customer_email ? `<div style="font-size:14px;color:#6c757d;">${q.customer_email}</div>` : ''}
        </td></tr>

        <!-- Items table -->
        <tr><td style="padding:28px 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f1f3f5;border-radius:10px;overflow:hidden;">
            <thead><tr style="background:#f8f9fa;">
              <th style="padding:10px 16px;text-align:left;font-size:11px;font-weight:600;color:#6c757d;text-transform:uppercase;">Item</th>
              <th style="padding:10px 16px;text-align:center;font-size:11px;font-weight:600;color:#6c757d;text-transform:uppercase;">Qty</th>
              <th style="padding:10px 16px;text-align:right;font-size:11px;font-weight:600;color:#6c757d;text-transform:uppercase;">Unit Price</th>
              <th style="padding:10px 16px;text-align:right;font-size:11px;font-weight:600;color:#6c757d;text-transform:uppercase;">Subtotal</th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </td></tr>

        <!-- Totals -->
        <tr><td style="padding:20px 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td width="55%"></td><td>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:4px 0;font-size:14px;color:#6c757d;">Subtotal</td>
                  <td style="padding:4px 0;font-size:14px;color:#1a1a2e;text-align:right;">${fmt(q.subtotal)}</td>
                </tr>
                <tr>
                  <td style="padding:12px 0 4px;font-size:16px;font-weight:700;color:#1a1a2e;border-top:2px solid #f1f3f5;">Grand Total</td>
                  <td style="padding:12px 0 4px;font-size:16px;font-weight:700;color:#1a1a2e;text-align:right;border-top:2px solid #f1f3f5;">${fmt(q.grand_total)}</td>
                </tr>
              </table>
            </td></tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:32px 40px;text-align:center;border-top:1px solid #f1f3f5;margin-top:28px;">
          <div style="font-size:13px;color:#6c757d;">Thank you for considering Chasing Dreams Events.</div>
          <div style="font-size:13px;color:#6c757d;margin-top:4px;">Questions? Reply to this email or visit partytheme.lk</div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}
