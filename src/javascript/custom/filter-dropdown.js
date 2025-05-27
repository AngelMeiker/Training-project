document.addEventListener("DOMContentLoaded", function () {
  const filterButton = document.querySelector(".js-filter-button");
  const dropdownFilter = document.querySelector(".js-dropdown-filter");
  const dropdownCloseButton = document.querySelector(".js-button-close");
  const overlay = document.querySelector(".js-overlay");

  if (filterButton && dropdownFilter) {
    filterButton.addEventListener("click", function () {
      dropdownFilter.classList.toggle("next-renovation__dropdown-filter--active");
      overlay.classList.toggle("page-overlay--active");

      if (dropdownFilter.classList.contains("next-renovation__dropdown-filter--active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  }

  if (dropdownCloseButton && dropdownFilter) {
    dropdownCloseButton.addEventListener("click", function () {
      dropdownFilter.classList.remove("next-renovation__dropdown-filter--active");
      overlay.classList.remove("page-overlay--active");
      document.body.style.overflow = "";
    });
  }

  let filterResizeTimer;
  window.addEventListener("resize", function () {
    if (dropdownFilter) {
      dropdownFilter.style.transition = "none";
      clearTimeout(filterResizeTimer);
      filterResizeTimer = setTimeout(function () {
        dropdownFilter.style.transition = "transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease";
      }, 250);
    }
  });
});
