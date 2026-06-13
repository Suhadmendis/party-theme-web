// Runs on every page. Checks seller session and updates the UI accordingly.
(async function () {
  console.log('[AuthGuard] Script started');
  console.log('[AuthGuard] Current URL:', window.location.href);
  console.log('[AuthGuard] pathname:', window.location.pathname);

  var session;
  try {
    session = await getSellerSession();
    console.log('[AuthGuard] getSellerSession() returned:', session);
  } catch (e) {
    console.error('[AuthGuard] getSellerSession() threw an error:', e);
    return;
  }

  const isLoggedIn = !!session;
  console.log('[AuthGuard] isLoggedIn:', isLoggedIn);

  // Redirect unauthenticated users to home on protected pages
  var rawPage = window.location.pathname.split('/').pop() || 'index.html';
  console.log('[AuthGuard] rawPage:', rawPage);
  var currentPage = rawPage.indexOf('.') === -1 ? rawPage + '.html' : rawPage;
  console.log('[AuthGuard] currentPage (normalised):', currentPage);

  var PROTECTED = ['quotation.html', 'cloudinary-structure.html'];
  var isProtectedPage = PROTECTED.indexOf(currentPage) !== -1;
  console.log('[AuthGuard] PROTECTED list:', PROTECTED);
  console.log('[AuthGuard] isProtectedPage:', isProtectedPage);
  console.log('[AuthGuard] Will redirect?', isProtectedPage && !isLoggedIn);

  if (isProtectedPage && !isLoggedIn) {
    console.log('[AuthGuard] Redirecting to index.html now...');
    window.location.href = 'index.html';
    return;
  }

  console.log('[AuthGuard] No redirect — continuing');

  // Show or hide seller-only nav items based on login state
  var navItems = document.querySelectorAll('.navbar-nav .nav-item');
  console.log('[AuthGuard] Total nav items found:', navItems.length);
  var NAV_PROTECTED = ['quotation.html', 'cloudinary-structure.html'];
  navItems.forEach(function (item) {
    var link = item.querySelector('a.nav-link');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    var isNavProtected = NAV_PROTECTED.some(function (p) { return href.indexOf(p) !== -1; });
    if (isNavProtected) {
      var newDisplay = isLoggedIn ? '' : 'none';
      console.log('[AuthGuard] Nav item href="' + href + '" → display set to "' + newDisplay + '"');
      item.style.display = newDisplay;
    }
  });

  // Show access banner on protected pages
  var banner = document.getElementById('auth-banner');
  console.log('[AuthGuard] Banner element found:', !!banner);
  if (banner) {
    if (isLoggedIn) {
      banner.innerHTML = '<div class="auth-banner auth-banner-success"><i class="fa-solid fa-circle-check"></i> You are logged in and allowed to access this page.</div>';
      console.log('[AuthGuard] Showing success banner');
    } else {
      banner.innerHTML = '<div class="auth-banner auth-banner-warning"><i class="fa-solid fa-triangle-exclamation"></i> You are not logged in. Some features on this page may be restricted.</div>';
      console.log('[AuthGuard] Showing warning banner');
    }
  }

  // Inject seller name + logout button when logged in
  if (isLoggedIn) {
    var sellerName = (session.user.user_metadata && session.user.user_metadata.name)
      ? session.user.user_metadata.name
      : session.user.email;
    console.log('[AuthGuard] Injecting seller nav for:', sellerName);

    var navbarCollapse = document.querySelector('.navbar-collapse');
    console.log('[AuthGuard] navbarCollapse found:', !!navbarCollapse);
    if (navbarCollapse) {
      var info = document.createElement('div');
      info.id = 'seller-nav-info';
      info.innerHTML =
        '<span class="seller-nav-name"><i class="fa-solid fa-circle-user"></i> ' + sellerName + '</span>' +
        '<button class="seller-nav-logout" id="seller-logout-btn">Logout</button>';
      navbarCollapse.appendChild(info);

      document.getElementById('seller-logout-btn').addEventListener('click', async function () {
        console.log('[AuthGuard] Logout clicked');
        await signOutSeller();
        window.location.href = 'index.html';
      });
    }
  }

  console.log('[AuthGuard] Script finished');
})();
