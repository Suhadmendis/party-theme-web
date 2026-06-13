// Runs on every page. Checks seller session and updates the UI accordingly.
(async function () {
  const session = await getSellerSession();
  const isLoggedIn = !!session;

  // Show or hide seller-only nav items (identified by their href)
  const SELLER_PAGES = ['quotation.html', 'cloudinary-structure.html'];
  document.querySelectorAll('.navbar-nav .nav-item').forEach(function (item) {
    var link = item.querySelector('a.nav-link');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    var isProtected = SELLER_PAGES.some(function (p) { return href.indexOf(p) !== -1; });
    if (isProtected) {
      item.style.display = isLoggedIn ? '' : 'none';
    }
  });

  // Inject seller name + logout button when logged in
  if (isLoggedIn) {
    var sellerName = (session.user.user_metadata && session.user.user_metadata.name)
      ? session.user.user_metadata.name
      : session.user.email;

    var navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      var info = document.createElement('div');
      info.id = 'seller-nav-info';
      info.innerHTML =
        '<span class="seller-nav-name"><i class="fa-solid fa-circle-user"></i> ' + sellerName + '</span>' +
        '<button class="seller-nav-logout" id="seller-logout-btn">Logout</button>';
      navbarCollapse.appendChild(info);

      document.getElementById('seller-logout-btn').addEventListener('click', async function () {
        await signOutSeller();
        window.location.href = 'index.html';
      });
    }
  }

  // Redirect unauthenticated users away from protected pages
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (SELLER_PAGES.indexOf(currentPage) !== -1 && !isLoggedIn) {
    window.location.href = 'seller-login.html?redirect=' + encodeURIComponent(currentPage);
  }
})();
