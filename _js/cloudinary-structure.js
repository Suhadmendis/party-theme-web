new Vue({
  el: '#cloudinary-structure',
  data: {
    folders: [],
    assets: [],
    loading: true,
    openFolders: {}
  },
  computed: {
    folderTree() {
      return this.folders.map(folder => ({
        name: folder.name,
        external_id: folder.external_id || folder.name,
        assets: this.assets.filter(a => a.asset_folder === folder.name)
      }));
    }
  },
  async created() {
    this.folders = await fetchFolders();
    this.assets = await fetchAllProducts(this.folders);
    this.folders.forEach(f => {
      this.$set(this.openFolders, f.name, true);
    });
    this.loading = false;
  },
  methods: {
    toggleFolder(name) {
      this.$set(this.openFolders, name, !this.openFolders[name]);
    },
    assetPath(asset) {
      return asset.asset_folder + '/' + asset.asset_id;
    }
  }
});
