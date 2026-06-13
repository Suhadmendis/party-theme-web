# Backend & Database Documentation

Recorded here for restoration after the temporary static-data phase.

---

## MySQL Database

**Local DB name:** `party_theme_db`  
**Production DB name:** `partythe_me_db`  
**Config file:** `config/db.php` (switches credentials based on `$_SERVER['HTTP_HOST']`)

### Table: `m_products`

| Column | Description |
|--------|-------------|
| `asset_id` | Cloudinary asset ID — primary product identifier |
| `asset_folder` | Product category (matches Cloudinary folder name) |
| `name` | Product display name |
| `description` | Product description |
| `url` | Cloudinary HTTP image URL |
| `secure_url` | Cloudinary HTTPS image URL |

Search is done with a `LIKE '%query%'` on `CONCAT(asset_folder, ' ', description, ' ', name)`, sorted descending by `match_count` (substring occurrence count). Default limit 1000; `&OPERATION=QUOTATION` limits to 10.

---

## PHP API Endpoints (`server/`)

### `GENERAL.php?COMMAND=ALL_FOLDERS`

Fetches all Cloudinary asset folders via REST API.

**Response:**
```json
{
  "folders": [
    { "name": "Animals", "external_id": "...", "path": "Animals" }
  ]
}
```

**Used in:** `_js/script.js` — populates the category tab bar on `shop.php`. Triggers `getProducts()` after folders load.

---

### `PRODUCTS.php?COMMAND=GET_PRODUCTS&FOLDER_NAME=<name>`

Fetches up to 50 products from a specific Cloudinary asset folder.

**Response:** array of Cloudinary resource objects
```json
[
  {
    "asset_id": "abc123",
    "asset_folder": "Animals",
    "url": "http://res.cloudinary.com/...",
    "secure_url": "https://res.cloudinary.com/...",
    "metadata": {
      "name": "Product Name",
      "description": "Product description text",
      "amount": "15000"
    }
  }
]
```

**Used in:**
- `_js/index.js` — homepage featured products (hardcoded to `Animals` folder)
- `_js/product.js` — related products horizontal slider (fetches same folder as current product)

---

### `PRODUCTS.php?COMMAND=DB_PRODUCT_SEARCH&QUERY=<term>`

Searches the `m_products` MySQL table. Returns rows sorted by relevance.

**Response:** array of `m_products` rows
```json
[
  {
    "asset_id": "abc123",
    "asset_folder": "Animals",
    "name": "Product Name",
    "description": "Product description",
    "url": "http://...",
    "secure_url": "https://...",
    "match_count": "2"
  }
]
```

**Used in:**
- `_js/script.js` — shop page search (primary product source; `resType = "DB"`)
- `_js/quotation.js` — quotation builder autocomplete search (with `&OPERATION=QUOTATION` for limit 10)

---

### `PRODUCTS.php?COMMAND=GET_PRODUCT&ASSET_ID=<id>`

Fetches a single product from Cloudinary by asset ID.

**Response:** single Cloudinary resource object
```json
{
  "asset_id": "abc123",
  "asset_folder": "Animals",
  "url": "http://...",
  "secure_url": "https://...",
  "metadata": {
    "name": "Product Name",
    "description": "Product description",
    "amount": "15000"
  },
  "last_updated": { "update_at": "2024-01-01T00:00:00Z" },
  "created_at": "2024-01-01T00:00:00Z"
}
```

**Used in:** `_js/product.js` — product detail page. Asset ID is read from `?asset_id=` URL param.

---

### `PRODUCTS.php?COMMAND=PRODUCT_SEARCH&QUERY=<term>`

Searches via Cloudinary metadata API (deprecated — replaced by `DB_PRODUCT_SEARCH` in all active code).

---

### `enternames.php` (no COMMAND param)

Admin utility. Returns products from `m_products` where `name` or `description` is blank, `'Product'`, or `'no'`. Used to identify items needing metadata.

---

## Cloudinary

**Cloud name:** `dic13326d`  
**API key:** `933634414754845`  
**API secret:** `DunCWR1RWwNFH_hgfMaaPwl8rOs`  
**API base URL:** `https://api.cloudinary.com/v1_1/dic13326d/`  
**Authentication:** HTTP Basic Auth — base64 encode `API_KEY:API_SECRET` and send as `Authorization: Basic <token>`

Products are stored as Cloudinary assets organised into asset folders (one folder = one category). Metadata fields (`name`, `description`, `amount`, `availability`) are Cloudinary structured metadata attached to each asset. The DB (`m_products`) is a synced copy used for faster full-text search.

### Cloudinary API endpoints used

| Endpoint | Purpose |
|----------|---------|
| `GET /folders` | List all asset folders (product categories) |
| `GET /resources/by_asset_folder?asset_folder=<name>&max_results=50` | Get products in a folder |
| `GET /resources/by_asset_ids` (POST body with `asset_ids` array) | Get a single product by asset ID |
| `GET /resources/search?expression=metadata.name:<query>*&with_field=metadata` | Search products by metadata name |

### DB sync utility (`server/akila596.php`)

This script synced all Cloudinary assets into the `m_products` MySQL table. It:
1. Called `GET /folders` to get all folders
2. For each folder, called `GET /resources/by_asset_folder?max_results=500` to get all assets
3. Cleared the entire `m_products` table (`DELETE FROM m_products`)
4. Re-inserted every asset with columns: `asset_id`, `public_id`, `bytes`, `width`, `height`, `asset_folder`, `display_name`, `url`, `secure_url`, `description`, `name`, `availability`

Run this script manually whenever Cloudinary content changes to keep the DB in sync.

### Structured metadata fields on Cloudinary assets

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Product display name |
| `description` | string | Product description text |
| `amount` | string | Price in LKR (e.g. `"15000"`) |
| `availability` | integer | Stock flag (1 = available) |

---

## Database credentials

| Environment | Host | Username | Password | DB name |
|-------------|------|----------|----------|---------|
| MAMP local (`localhost:8888`) | localhost | root | root | party_theme_db |
| XAMPP local (`localhost`) | localhost | root | *(empty)* | party_theme_db |
| LAN (`192.168.1.70`) | localhost | root | *(empty)* | party_theme_db |
| Production (`partytheme.lk`) | partytheme.lk | partythe_akila | SaGaRa4000 | partythe_me_db |

---

## What was replaced (static phase)

| Original | Replaced with |
|----------|---------------|
| `server/` PHP files (not deleted) | Not called — axios calls removed |
| `config/db.php` | Not called |
| All `axios.get(server/...)` calls | Static data from `_js/static-data.js` |
| Folder list from Cloudinary | `STATIC_FOLDERS` constant |
| Product data from DB/Cloudinary | `STATIC_PRODUCTS` constant |
