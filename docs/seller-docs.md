# Seller & Quotation System Documentation

This document covers the Supabase database schema, seller authentication, quotation workflow,
email delivery, and related architecture decisions for the Chasing Dreams Events seller tools.

---

## Supabase Project

- **Project ID:** `kynpexaoiiozglwxizas`
- **URL:** `https://kynpexaoiiozglwxizas.supabase.co`
- **Region:** us-east-1
- **Integration file:** `_js/integrations/supabase.js` — exports `_supabase` client and helpers

---

## Database Schema

### Table: `company`

Stores the single company record for Chasing Dreams Events.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` | Primary key |
| `company_name` | `text` | Display name |
| `description` | `text` | Short company bio |
| `email` | `text` | Contact email |
| `phone` | `text` | Contact phone |
| `address` | `text` | Street address |
| `city` | `text` | City |
| `state` | `text` | State |
| `zip` | `text` | ZIP code |
| `latest_quotation_number` | `bigint` | Auto-incrementing counter for quotation references |

**RLS:** Public read access to all columns. Write restricted to authenticated sellers.

---

### Table: `sellers`

Internal seller accounts. No public registration — accounts are created by the business owner.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` | Primary key (matches Supabase Auth `auth.users.id`) |
| `name` | `text` | Seller display name |
| `email` | `text` | Login email (matches Supabase Auth email) |
| `role` | `text` | `'seller'` or `'admin'` |
| `status` | `text` | `'active'` or `'inactive'` |
| `created_at` | `timestamptz` | Account creation date |
| `last_login_at` | `timestamptz` | Set by the login page after each successful login |

**RLS:** Sellers can read and update their own row only.

---

### Table: `quotations`

One row per saved quotation.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` | Primary key |
| `seller_id` | `uuid` | FK → `auth.users.id` (owner) |
| `reference` | `text` | Unique reference, e.g. `QT-00000001` |
| `customer_name` | `text` | Optional customer name |
| `customer_email` | `text` | Optional customer email (required to send) |
| `item_count` | `int` | Number of line items |
| `subtotal` | `numeric` | Sum of all item subtotals |
| `grand_total` | `numeric` | Final total (equals subtotal; tax not implemented) |
| `status` | `text` | `'saved'` (only status currently used) |
| `cloned_from` | `text` | Reference of the source quotation if cloned |
| `last_sent_at` | `timestamptz` | When the last email was sent |
| `last_sent_to` | `text` | Email address last sent to |
| `created_at` | `timestamptz` | Auto-set on insert |
| `updated_at` | `timestamptz` | Auto-set on update |

**RLS:** Sellers can only select, insert, update, and delete rows where `seller_id = auth.uid()`.

---

### Table: `quotation_items`

Line items for each quotation.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` | Primary key |
| `quotation_id` | `uuid` | FK → `quotations.id` |
| `asset_id` | `text` | Cloudinary asset ID (nullable for manual items) |
| `item_name` | `text` | Seller-editable display name shown on the quotation |
| `original_item_name` | `text` | Preserved source name from Cloudinary at time of selection |
| `quantity` | `numeric` | Item quantity |
| `unit_price` | `numeric` | Price per unit |
| `subtotal` | `numeric` | `quantity × unit_price` |
| `sort_order` | `int` | Display order |

**RLS:** Inherits through the quotation owner check — sellers can only access items belonging to their own quotations.

---

### Table: `quotation_emails`

Delivery log for every email send attempt.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` | Primary key |
| `quotation_id` | `uuid` | FK → `quotations.id` |
| `sent_to` | `text` | Recipient email address |
| `status` | `text` | `'sent'` or `'failed'` |
| `error_message` | `text` | Failure detail from Resend API (null on success) |
| `sent_at` | `timestamptz` | Auto-set on insert |

**RLS:** Service-role client writes (bypasses RLS); sellers can read logs for their own quotations.

---

## Quotation Reference Numbers

References follow the format **`QT-XXXXXXXX`** where `XXXXXXXX` is an 8-digit zero-padded integer.

### How it works

1. `company.latest_quotation_number` stores the last used sequence number (starts at 0).
2. The PostgreSQL function `next_quotation_reference()` atomically increments the counter and returns the formatted reference:
   ```sql
   UPDATE company
   SET latest_quotation_number = latest_quotation_number + 1
   RETURNING 'QT-' || LPAD(latest_quotation_number::text, 8, '0')
   ```
3. The function is `SECURITY DEFINER` so it runs with elevated privileges and the increment is race-condition-safe.
4. Called from the frontend via `_supabase.rpc('next_quotation_reference')` in `saveQuotation()`.

### Why atomic UPDATE not SELECT+UPDATE

Using `UPDATE ... RETURNING` in a single statement prevents two concurrent saves from receiving the same reference number.

---

## Seller Authentication

### Architecture

- Supabase Auth handles all credential storage, hashing, and session management.
- No custom password hashing or credential storage in the codebase.
- The `sellers` table extends the auth user with display name, role, and status — joined by matching `id` to `auth.users.id`.

### Auth Flow

1. Seller navigates to `seller-login.html`
2. Vue form calls `signInSeller(email, password)` in `_js/integrations/supabase.js`
3. On success: `sellers` row is updated with `last_login_at = now()`
4. Seller is redirected to `?redirect=` parameter target, defaulting to `quotation.html`
5. Session persists in `localStorage` via Supabase's default session storage

### Protected Routes

`auth-guard.js` runs as an IIFE on every page. It:
- Calls `getSellerSession()` to check the current Supabase session
- On seller-only pages (`quotation.html`, `cloudinary-structure.html`): redirects unauthenticated users to `seller-login.html?redirect=<current-page>`
- On all pages: injects the seller name and a Logout button into the navbar when a session exists
- Hides/shows seller-only navbar items based on auth state

### Logout

The injected Logout button calls `_supabase.auth.signOut()` and reloads the page. Session is fully cleared by Supabase.

### Account Management

Seller accounts are created directly in the Supabase Auth dashboard or via the Supabase service-role API. There is no public-facing registration or self-signup flow.

---

## Quotation Workflow

### Creating a Quotation

1. Seller searches for products using the autocomplete search (queries Cloudinary via `searchProducts()`)
2. Clicking a product adds it to `QUOTATION_ITEMS` with `asset_id`, editable `item_name`, preserved `original_item_name`, quantity, unit price, and calculated subtotal
3. Seller can also click "Add item manually" for items not in the product catalog (`asset_id` = null)
4. Seller enters optional customer name and email
5. Clicking "Save Quotation" calls `next_quotation_reference()`, inserts a `quotations` row, then inserts all `quotation_items` rows
6. On success: form clears, success banner shows the new reference number

### Viewing a Quotation

1. Seller types into the "Find Quotation" search bar
2. Live search queries `quotations` by reference, customer name, email, or creation date
3. Clicking a result (or the "View Quotation" badge) loads the quotation and switches to view mode
4. View mode shows the reference card, customer info, items table (read-only), totals, action buttons, and delivery history

### Quotation Immutability

Saved quotations are **read-only**. The view mode has no edit inputs. This preserves the integrity of sent records. To modify a quotation, use **Clone**.

### Cloning a Quotation

1. In view mode, click "Clone Quotation"
2. All items, customer name, and customer email are copied into the new-quotation form
3. `isClone = true` and `clonedFromReference` are set — shown as a banner in the form
4. On save, the new quotation's `cloned_from` column stores the source reference
5. The original quotation is unchanged

---

## Item Name Distinction

Each `quotation_items` row stores two name fields:

| Field | Purpose |
|-------|---------|
| `item_name` | The name shown on the quotation — **seller-editable** in the form before saving |
| `original_item_name` | The name from Cloudinary at the time of selection — **read-only, preserved for audit** |

This allows sellers to rename an item for a specific quotation (e.g. rename "Balloon Arch Large" to "Grand Entrance Arch") without affecting the source product name. Manual items (no `asset_id`) have `original_item_name = null`.

---

## Quotation Email Delivery

### Architecture

- Emails are sent by the **`send-quotation` Supabase Edge Function** (`supabase/functions/send-quotation/index.ts`)
- Uses the [Resend](https://resend.com) API for transactional email delivery
- The function uses two Supabase clients:
  - **User-scoped client** (anon key + auth header): reads the quotation with RLS enforcement
  - **Service-role client**: writes to `quotation_emails` and updates `quotations.last_sent_at/last_sent_to`

### Required Secrets (set in Supabase dashboard → Edge Functions → Secrets)

| Secret | Value |
|--------|-------|
| `RESEND_API_KEY` | Resend API key from resend.com |
| `FROM_EMAIL` | Sender email address (must be verified in Resend) |

### Email Flow

1. Seller clicks "Send Quotation" (or "Resend Quotation") in view mode
2. Frontend calls `_supabase.functions.invoke('send-quotation', { body: { quotation_id } })`
3. Edge Function loads the quotation + items (via user-scoped client, RLS enforced)
4. Builds branded HTML email with reference, customer info, items table, and totals
5. Calls Resend API
6. Logs the delivery attempt to `quotation_emails` (service-role client)
7. On success: updates `quotations.last_sent_at` and `last_sent_to`
8. Returns `{ success: true, reference }` or `{ error: "..." }`

### Deploying the Edge Function

```bash
supabase functions deploy send-quotation --project-ref kynpexaoiiozglwxizas
```

### From email

Default: `quotes@chasingdreamsevents.com` — overridable via the `FROM_EMAIL` secret.
The domain must be verified in Resend before emails will deliver.

---

## Development Notes

### Dev Seller Accounts

Three placeholder seller accounts exist in the Supabase project for development and testing.
Credentials are managed in the Supabase Auth dashboard and are not stored in this codebase.
Remove or rotate dev credentials before opening the project to production traffic.

### Configuration Not in Code

- Supabase URL and anon key are in `_js/integrations/supabase.js` (public, safe to commit)
- `RESEND_API_KEY` is a Supabase Edge Function secret (never in frontend code)
- Company record (name, contact info) lives in the `company` Supabase table — edit via Supabase dashboard
