document.addEventListener('DOMContentLoaded', () => {
  const burgerToggleBtn = document.querySelector('.js-burger-toggle');
  const mobileDropdown = document.querySelector('.js-mobile-dropdown');
  const closeMobileMenuBtn = document.querySelector('.nav__close-mobile-menu');

  // Se abre o cierra el menú al pulsar el botón burger
  burgerToggleBtn.addEventListener('click', () => {
    const isOpen = burgerToggleBtn.classList.toggle('menu-open');
    mobileDropdown.classList.toggle('menu-open', isOpen);
  });

  // Se cierra el menú al pulsar el botón de cerrar
  closeMobileMenuBtn.addEventListener('click', () => {
    burgerToggleBtn.classList.remove('menu-open');
    mobileDropdown.classList.remove('menu-open');
  });
});

