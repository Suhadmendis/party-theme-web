// Cloudinary Admin API — direct frontend access with static-data fallback.
// The Admin API is designed for server-to-server use; CORS may block these calls
// in the browser. When blocked, every function falls back to STATIC_* constants
// from static-data.js so the site continues to work without a backend.

const CLOUDINARY_CONFIG = {
  cloudName: 'dic13326d',
  apiKey: '933634414754845',
  apiSecret: 'DunCWR1RWwNFH_hgfMaaPwl8rOs',
  baseUrl: 'https://api.cloudinary.com/v1_1/dic13326d'
};

function _cloudinaryAuth() {
  return 'Basic ' + btoa(CLOUDINARY_CONFIG.apiKey + ':' + CLOUDINARY_CONFIG.apiSecret);
}

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
    const res = await axios.get(CLOUDINARY_CONFIG.baseUrl + '/folders', {
      headers: { Authorization: _cloudinaryAuth() }
    });
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
      axios.get(CLOUDINARY_CONFIG.baseUrl + '/resources/by_asset_folder', {
        params: { asset_folder: f.name, max_results: 50, with_field: 'metadata' },
        headers: { Authorization: _cloudinaryAuth() }
      })
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
    const res = await axios.get(CLOUDINARY_CONFIG.baseUrl + '/resources/by_asset_folder', {
      params: { asset_folder: folderName, max_results: 50, with_field: 'metadata' },
      headers: { Authorization: _cloudinaryAuth() }
    });
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
    const res = await axios.post(
      CLOUDINARY_CONFIG.baseUrl + '/resources/by_asset_ids',
      { asset_ids: [assetId] },
      { headers: { Authorization: _cloudinaryAuth(), 'Content-Type': 'application/json' } }
    );
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

async function searchProducts(query) {
  try {
    const res = await axios.get(CLOUDINARY_CONFIG.baseUrl + '/resources/search', {
      params: {
        expression: 'resource_type:image AND (metadata.name:' + query + '* OR metadata.description:' + query + '*)',
        with_field: 'metadata',
        max_results: 10
      },
      headers: { Authorization: _cloudinaryAuth() }
    });
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
