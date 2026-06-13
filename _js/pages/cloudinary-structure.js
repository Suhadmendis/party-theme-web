new Vue({
  el: '#cloudinary-structure',
  data: {
    folders: [],
    selectedFolder: null,
    folderAssets: [],
    loadingFolders: true,
    loadingAssets: false,
    error: null
  },
  async created() {
    try {
      this.folders = await fetchFolders();
    } catch (e) {
      this.error = 'Failed to load folders. Please try refreshing the page.';
    }
    this.loadingFolders = false;
  },
  methods: {
    async selectFolder(folder) {
      this.selectedFolder = folder;
      this.folderAssets = [];
      this.loadingAssets = true;
      this.error = null;
      try {
        this.folderAssets = await fetchFolderAssetsRaw(folder.name);
      } catch (e) {
        this.error = 'Failed to load assets for this folder.';
      }
      this.loadingAssets = false;
    },
    goBack() {
      this.selectedFolder = null;
      this.folderAssets = [];
      this.error = null;
    },
    formatBytes(bytes) {
      if (!bytes && bytes !== 0) return '—';
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
      return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    },
    formatDate(dateStr) {
      if (!dateStr) return '—';
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
      });
    },
    assetDisplayName(asset) {
      if (asset.metadata && asset.metadata.name) return asset.metadata.name;
      if (asset.display_name) return asset.display_name;
      if (asset.public_id) return asset.public_id.split('/').pop();
      return asset.asset_id;
    },
    metaVal(asset, field) {
      return (asset.metadata && asset.metadata[field]) ? asset.metadata[field] : null;
    }
  }
});
