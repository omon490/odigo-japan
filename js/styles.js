var elMenu = document.querySelector(`.site-header__top`);
var elMenuOpen = document.querySelector(`.site-header__top--open`);
var elMenuToggler = document.querySelector(`.site-header__toggler`);

elMenuToggler.addEventListener(`click`, function() {
  elMenu.classList.toggle(`site-header__top--open`);
});