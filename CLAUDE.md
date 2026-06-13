# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Party Theme is a PHP-based party decor rental website for "Chasing Dreams Events" (Westchester County, NY). It has no build system — files are served directly by a web server (MAMP/XAMPP locally, Apache in production at `partytheme.lk`).

## Running Locally

Serve with MAMP or XAMPP. The site auto-configures its DB connection based on `$_SERVER['HTTP_HOST']`:

- `localhost:8888` → MAMP (user: `root`, password: `root`)
- `localhost` or `192.168.1.70` → XAMPP/plain Apache (user: `root`, no password)
- `partytheme.lk` → production credentials in `config/db.php`

Database name: `party_theme_db` (local) / `partythe_me_db` (production).

## Architecture

### Page Structure

Every page includes `header.php` (HTML `<head>`, Bootstrap, Vue.js 2, Axios, navbar) and `footer.php`. Pages are:

- `index.php` — homepage; hero, testimonial slider, featured products from Cloudinary
- `shop.php` — product browser with folder/category tabs and search; uses `_js/script.js`
- `product.php` — single product detail view
- `packages.php` — event packages listing; uses `_js/package.js`
- `quotation.php` — quotation builder with product search autocomplete; uses `_js/quotation.js`

### Frontend

Vue.js 2 (`_js/vue.js`) is used on every page — each page mounts a single Vue instance to `#app` (or `#quotation-section` / `#package-section`). Axios (`_js/axios.min.js`) handles API calls to the `server/` PHP endpoints. Bootstrap 4 is used for layout; page-specific CSS lives in `_css/`.

### Backend API (`server/`)

PHP files accept a `?COMMAND=X` query parameter and return JSON:

| File | Command | Description |
|------|---------|-------------|
| `GENERAL.php` | `ALL_FOLDERS` | Lists Cloudinary asset folders |
| `PRODUCTS.php` | `GET_PRODUCTS&FOLDER_NAME=X` | Fetches products from a Cloudinary folder |
| `PRODUCTS.php` | `DB_PRODUCT_SEARCH&QUERY=X` | Searches `m_products` MySQL table |
| `PRODUCTS.php` | `PRODUCT_SEARCH&QUERY=X` | Searches via Cloudinary metadata API |
| `PRODUCTS.php` | `GET_PRODUCT&ASSET_ID=X` | Fetches a single product by Cloudinary asset ID |
| `enternames.php` | *(direct call)* | Admin utility — lists products missing name/description |

### Data Sources

Products are stored in two places:
1. **Cloudinary** — images and metadata (name, description, color). Credentials are hardcoded in `server/GENERAL.php` and `server/PRODUCTS.php`.
2. **MySQL `m_products` table** — product records synced from Cloudinary. The shop page (`script.js`) uses `resType = "DB"` to prefer DB search over Cloudinary search.

### CSS Organization

- `_css/` — shared component styles (header, footer, hero, testimonial, etc.)
- `product.css`, `package.css` — page-level styles at root
- `test.css` — loaded globally in `header.php`; used for active development overrides
