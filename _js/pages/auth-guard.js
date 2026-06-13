// Runs on every page. Checks seller session and updates the UI accordingly.
(async function () {
  console.log('[AuthGuard] Script started');

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
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  console.log('[AuthGuard] currentPage:', currentPage);

  var PROTECTED = ['quotation.html', 'cloudinary-structure.html'];
  console.log('[AuthGuard] Is protected page:', PROTECTED.indexOf(currentPage) !== -1);

  if (PROTECTED.indexOf(currentPage) !== -1 && !isLoggedIn) {
    console.log('[AuthGuard] Not logged in on protected page — redirecting to index.html');
    window.location.href = 'index.html';
    return;
  }

  console.log('[AuthGuard] Passed redirect check — continuing');

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
