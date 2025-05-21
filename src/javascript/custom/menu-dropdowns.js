document.addEventListener('DOMContentLoaded', () => {
  const dropdownConfigs = [
    {
      buttonSelector: '.js-button-language',
      dropdownSelector: '.js-dropdown-language'
    },
    {
      buttonSelector: '.js-button-profile',
      dropdownSelector: '.js-dropdown-profile'
    }
  ];

  const closeAllDropdowns = () => {
    dropdownConfigs.forEach(config => {
      document.querySelectorAll(config.dropdownSelector).forEach(dropdown => {
        dropdown.classList.remove('nav__dropdown--active');
      });
    });
    document.querySelectorAll('.js-arrow-dropdown').forEach(icon => {
      icon.classList.remove('nav__icon-arrow-dropdown--active');
    });
    document.querySelectorAll('.js-button-bg').forEach(activeEl => {
      activeEl.classList.remove('nav__button--active');
    });
  };

  dropdownConfigs.forEach(config => {
    document.querySelectorAll(config.buttonSelector).forEach(button => {
      const dropdown =
        button.querySelector(config.dropdownSelector) || button.nextElementSibling;
      const arrowIcon = button.querySelector('.js-arrow-dropdown');

      if (!dropdown) return;

      button.addEventListener('click', e => {
        e.stopPropagation();
        const wasOpen = dropdown.classList.contains('nav__dropdown--active');
        closeAllDropdowns();

        const activeElement = button.querySelector('.js-button-bg') || button;

        if (!wasOpen) {
          dropdown.classList.add('nav__dropdown--active');
          if (arrowIcon) arrowIcon.classList.add('nav__icon-arrow-dropdown--active');

          if (window.innerWidth <= 768) {
            activeElement.classList.add('nav__button--active');
          }
        } else {
          if (window.innerWidth <= 768) {
            activeElement.classList.remove('nav__button--active');
          }
        }
      });
    });
  });

  document.addEventListener('click', closeAllDropdowns);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      closeAllDropdowns();
    } else {
      dropdownConfigs.forEach(config => {
        document.querySelectorAll(config.dropdownSelector).forEach(dropdown => {
          dropdown.classList.remove('nav__dropdown--active');
        });
      });
      document.querySelectorAll('.js-arrow-dropdown').forEach(icon => {
        icon.classList.remove('nav__icon-arrow-dropdown--active');
      });
      document.querySelectorAll('.js-button-bg').forEach(activeEl => {
        activeEl.classList.remove('nav__button--active');
      });
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize(); 
});
