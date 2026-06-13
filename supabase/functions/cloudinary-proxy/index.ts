import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const cloudName = Deno.env.get('CLOUDINARY_CLOUD_NAME')!
    const apiKey    = Deno.env.get('CLOUDINARY_API_KEY')!
    const apiSecret = Deno.env.get('CLOUDINARY_API_SECRET')!
    const auth      = 'Basic ' + btoa(apiKey + ':' + apiSecret)
    const base      = `https://api.cloudinary.com/v1_1/${cloudName}`

    const url    = new URL(req.url)
    const action = url.searchParams.get('action')

    let res: Response

    if (action === 'folders') {
      res = await fetch(`${base}/folders`, { headers: { Authorization: auth } })

    } else if (action === 'products') {
      const folder = url.searchParams.get('folder') || ''
      res = await fetch(
        `${base}/resources/by_asset_folder?asset_folder=${encodeURIComponent(folder)}&max_results=50&with_field=metadata`,
        { headers: { Authorization: auth } }
      )

    } else if (action === 'raw_assets') {
      const folder = url.searchParams.get('folder') || ''
      res = await fetch(
        `${base}/resources/by_asset_folder?asset_folder=${encodeURIComponent(folder)}&max_results=50&with_field=metadata,tags`,
        { headers: { Authorization: auth } }
      )

    } else if (action === 'product') {
      const assetId = url.searchParams.get('asset_id') || ''
      res = await fetch(`${base}/resources/by_asset_ids`, {
        method: 'POST',
        headers: { Authorization: auth, 'Content-Type': 'application/json' },
        body: JSON.stringify({ asset_ids: [assetId] })
      })

    } else if (action === 'search') {
      const query      = url.searchParams.get('query') || ''
      const expression = `resource_type:image AND (metadata.name:${query}* OR metadata.description:${query}*)`
      res = await fetch(
        `${base}/resources/search?expression=${encodeURIComponent(expression)}&with_field=metadata&max_results=10`,
        { headers: { Authorization: auth } }
      )

    } else {
      return jsonRes({ error: 'Unknown action' }, 400)
    }

    const data = await res.json()
    return jsonRes(data, res.status)

  } catch (err) {
    return jsonRes({ error: String(err) }, 500)
  }
})

function jsonRes(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}
