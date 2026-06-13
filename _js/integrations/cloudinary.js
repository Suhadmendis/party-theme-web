// Cloudinary access via Supabase Edge Function proxy (avoids Admin API CORS restriction).
// Falls back to STATIC_* constants from static-data.js if the proxy is unreachable.

const CLOUDINARY_PROXY = 'https://kynpexaoiiozglwxizas.supabase.co/functions/v1/cloudinary-proxy';

function _normalizeResource(r) {
  const meta = r.metadata || {};
  return {
    asset_id: r.asset_id,
    asset_folder: r.asset_folder,
    name: meta.name || r.display_name || r.public_id || '',
    description: meta.description || '',
    url: r.url || r.secure_url || '',
    secure_url: r.secure_url || r.url || '',
    metadata: {
      name: meta.name || r.display_name || r.public_id || '',
      description: meta.description || '',
      amount: meta.amount || ''
    },
    last_updated: { update_at: r.last_updated || new Date().toISOString() },
    created_at: r.created_at || new Date().toISOString()
  };
}

async function fetchFolders() {
  try {
    const res = await axios.get(CLOUDINARY_PROXY + '?action=folders');
    const folders = res.data.folders || [];
    console.log('[Cloudinary] Loaded', folders.length, 'folders');
    return folders;
  } catch (e) {
    console.warn('[Cloudinary] fetchFolders failed — using static data.', e.message);
    return STATIC_FOLDERS;
  }
}

async function fetchAllProducts(folders) {
  try {
    const requests = folders.map(f =>
      axios.get(CLOUDINARY_PROXY + '?action=products&folder=' + encodeURIComponent(f.name))
    );
    const responses = await Promise.all(requests);
    const products = responses.flatMap(r => (r.data.resources || []).map(_normalizeResource));
    console.log('[Cloudinary] Loaded', products.length, 'products');
    return products;
  } catch (e) {
    console.warn('[Cloudinary] fetchAllProducts failed — using static data.', e.message);
    return STATIC_PRODUCTS;
  }
}

async function fetchProductsByFolder(folderName) {
  try {
    const res = await axios.get(CLOUDINARY_PROXY + '?action=products&folder=' + encodeURIComponent(folderName));
    const products = (res.data.resources || []).map(_normalizeResource);
    console.log('[Cloudinary] Loaded', products.length, 'products for folder', folderName);
    return products;
  } catch (e) {
    console.warn('[Cloudinary] fetchProductsByFolder failed — using static data.', e.message);
    return STATIC_PRODUCTS.filter(p => p.asset_folder === folderName);
  }
}

async function fetchProductById(assetId) {
  try {
    const res = await axios.get(CLOUDINARY_PROXY + '?action=product&asset_id=' + encodeURIComponent(assetId));
    const resources = res.data.resources || [];
    if (resources.length > 0) {
      console.log('[Cloudinary] Loaded product', assetId);
      return _normalizeResource(resources[0]);
    }
  } catch (e) {
    console.warn('[Cloudinary] fetchProductById failed — using static data.', e.message);
  }
  const match = STATIC_PRODUCTS.find(p => p.asset_id === assetId) || STATIC_PRODUCTS[0];
  return {
    ...match,
    last_updated: { update_at: new Date().toISOString() },
    created_at: new Date().toISOString()
  };
}

// Returns raw Cloudinary resource objects (not normalised) — used by the Cloudinary Folder Structure admin page.
async function fetchFolderAssetsRaw(folderName) {
  try {
    const res = await axios.get(CLOUDINARY_PROXY + '?action=raw_assets&folder=' + encodeURIComponent(folderName));
    console.log('[Cloudinary] Loaded raw assets for folder', folderName);
    return res.data.resources || [];
  } catch (e) {
    console.warn('[Cloudinary] fetchFolderAssetsRaw failed — using static data.', e.message);
    return STATIC_PRODUCTS.filter(p => p.asset_folder === folderName);
  }
}

async function searchProducts(query) {
  try {
    const res = await axios.get(CLOUDINARY_PROXY + '?action=search&query=' + encodeURIComponent(query));
    const products = (res.data.resources || []).map(_normalizeResource);
    console.log('[Cloudinary] Search returned', products.length, 'results');
    return products;
  } catch (e) {
    console.warn('[Cloudinary] searchProducts failed — using static data.', e.message);
    const q = query.toLowerCase();
    return STATIC_PRODUCTS.filter(p =>
      (p.asset_folder + ' ' + p.description + ' ' + p.name).toLowerCase().includes(q)
    ).slice(0, 10);
  }
}
