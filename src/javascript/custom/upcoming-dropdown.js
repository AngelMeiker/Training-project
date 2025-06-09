document.addEventListener("DOMContentLoaded", function() {
  // Elementos para "Ordenar por"
  const orderButton = document.querySelector('.js-order-button');
  const orderDropdown = document.querySelector('.js-order-dropdown');
  console.log("orderButton:", orderButton);
  console.log("orderDropdown:", orderDropdown);

  // Elementos para "Filas por páginas"
  const filterButton = document.querySelector('.js-filter-pages-button');
  const filterDropdown = document.querySelector('.js-filter-dropdown');
  console.log("filterButton:", filterButton);
  console.log("filterDropdown:", filterDropdown);

  if (orderButton && orderDropdown) {
    orderButton.addEventListener('click', function(event) {
      event.stopPropagation(); // Evita propagación si tienes otros eventos
      orderDropdown.classList.toggle('upcoming-renovation__dropdown--active');
      console.log("Classes after toggle (order):", orderDropdown.classList);
    });
  }

  if (filterButton && filterDropdown) {
    filterButton.addEventListener('click', function(event) {
      event.stopPropagation();
      filterDropdown.classList.toggle('upcoming-renovation__dropdown--active');
      console.log("Classes after toggle (filter):", filterDropdown.classList);
    });
  }
});
