// Codice JavaScript per la gestione del menu ad hamburger
var toggleMenu = document.getElementById('toggle-menu');
var hamburgerMenuList = document.querySelector('.hamburger-menu-list');

toggleMenu.addEventListener('change', function() {
  if (this.checked) {
    hamburgerMenuList.style.display = 'block';
  } else {
    hamburgerMenuList.style.display = 'none';
  }
});
