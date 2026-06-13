// Runs on every page. Checks seller session and updates the UI accordingly.
(async function () {
  const session = await getSellerSession();
  const isLoggedIn = !!session;

  // Redirect unauthenticated users to home on protected pages
  var rawPage = window.location.pathname.split('/').pop() || 'index.html';
  var currentPage = rawPage.indexOf('.') === -1 ? rawPage + '.html' : rawPage;
  var PROTECTED = ['quotation.html', 'cloudinary-structure.html'];
  if (PROTECTED.indexOf(currentPage) !== -1 && !isLoggedIn) {
    window.location.href = 'index.html';
    return;
  }

  // Show or hide seller-only nav items based on login state
  var NAV_PROTECTED = ['quotation.html', 'cloudinary-structure.html'];
  document.querySelectorAll('.navbar-nav .nav-item').forEach(function (item) {
    var link = item.querySelector('a.nav-link');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    var isProtected = NAV_PROTECTED.some(function (p) { return href.indexOf(p) !== -1; });
    if (isProtected) {
      item.style.display = isLoggedIn ? '' : 'none';
    }
  });

  // Show access banner on protected pages
  var banner = document.getElementById('auth-banner');
  if (banner) {
    if (isLoggedIn) {
      banner.innerHTML = '<div class="auth-banner auth-banner-success"><i class="fa-solid fa-circle-check"></i> You are logged in and allowed to access this page.</div>';
    } else {
      banner.innerHTML = '<div class="auth-banner auth-banner-warning"><i class="fa-solid fa-triangle-exclamation"></i> You are not logged in. Some features on this page may be restricted.</div>';
    }
  }

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
})();
