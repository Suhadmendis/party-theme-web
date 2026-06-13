// Runs on every page. Checks seller session and updates the UI accordingly.
(async function () {
  const session = await getSellerSession();
  const isLoggedIn = !!session;

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
