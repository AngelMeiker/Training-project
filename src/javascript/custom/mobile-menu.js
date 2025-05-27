document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.js-header');
  const nav = document.querySelector('.js-nav');
  const dropdown = document.querySelector('.js-nav-menu');
  const openBtn = document.querySelector('.js-button-dropdown-menu');
  const closeBtn = document.querySelector('.js-button-close-menu');

  function updateHeaderHeight() {
    const totalHeight = header.offsetTop + header.offsetHeight;
    nav.style.setProperty('--header-height', totalHeight + 'px');
  }

  updateHeaderHeight();

  function resetMenuClasses() {
    dropdown.classList.remove('nav__menu--active');
    header.classList.remove('nav__header--active');
    document.body.style.overflow = '';
  }

  let resizeTimer;
  window.addEventListener('resize', function () {
    updateHeaderHeight();

    dropdown.style.transition = 'none';

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      dropdown.style.transition = 'transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease';
    }, 250);

    if (window.innerWidth > 768) {
      resetMenuClasses();
    }
  });

  function toggleMenu() {
    dropdown.classList.toggle('nav__menu--active');
    header.classList.toggle('nav__header--active');

    if (dropdown.classList.contains('nav__menu--active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  openBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);
});
