document.addEventListener('DOMContentLoaded', () => {
  // Elementos clave
  const form = document.querySelector('.js-dropdown-filter-form');
  if (!form) return;

  // Seleccionamos todos los elementos con la clase .js-show-filters
  const showFilters = document.querySelectorAll('.js-show-filters');
  const filterButtonContainer = document.querySelector('.js-filter-button-container');
  const filterContainer = document.querySelector('.js-filter-container');

  // Buscamos o creamos un contenedor de chips dentro de .js-filter-container
  let chipContainer = filterContainer.querySelector('.chip-container');
  if (!chipContainer) {
    chipContainer = document.createElement('div');
    chipContainer.classList.add('chip-container');
    filterContainer.appendChild(chipContainer);
  }

  // Función que crea y configura un chip con un botón para eliminarlo
  function createChip(value) {
    const chip = document.createElement('div');
    chip.classList.add('chip');
    chip.textContent = value;

    const removeBtn = document.createElement('span');
    removeBtn.classList.add('icon-close');
    removeBtn.style.cursor = 'pointer';
    removeBtn.addEventListener('click', () => {
      chip.remove();
      updateFilterCount();
    });

    chip.appendChild(removeBtn);
    return chip;
  }

  // Función que actualiza el contador de chips y la clase activa según la cantidad de chips
  function updateFilterCount() {
    const numberFilterEls = document.querySelectorAll('.js-number-filters');
    const count = chipContainer.children.length;
    numberFilterEls.forEach(el => el.textContent = count);

    if (count > 0) {
      // Añadimos la clase activa a cada uno de los elementos .js-show-filters
      showFilters.forEach(el => el.classList.add('next-renovation__mid-show-filters--active'));
      filterButtonContainer.classList.add('next-renovation__filter-button-container--active');
    } else {
      // Removemos la clase activa de cada uno de los elementos .js-show-filters
      showFilters.forEach(el => el.classList.remove('next-renovation__mid-show-filters--active'));
      filterButtonContainer.classList.remove('next-renovation__filter-button-container--active');
    }
  }

  // Manejador para el botón "Borrar filtros"
  const resetButton = document.querySelector('.js-button-reset');
  if (resetButton) {
    resetButton.addEventListener('click', (e) => {
      e.preventDefault();
      chipContainer.innerHTML = "";
      updateFilterCount();
    });
  }

  // Manejador para el envío del formulario: crea chips según los filtros aplicados
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Se eliminan los chips previos
    chipContainer.innerHTML = "";

    const policiesSelect = document.getElementById('policies-number');
    const riskName = document.getElementById('risk-name').value.trim();
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const amount = document.getElementById('amount').value;
    const stateSelect = document.getElementById('state');

    if (policiesSelect && policiesSelect.value !== 'allpolicies') {
      const text = policiesSelect.options[policiesSelect.selectedIndex].text;
      chipContainer.appendChild(createChip(text));
    }
    if (riskName) {
      chipContainer.appendChild(createChip(riskName));
    }
    if (startDate || endDate) {
      chipContainer.appendChild(createChip(`${startDate || 'Inicio'} - ${endDate || 'Fin'}`));
    }
    if (amount) {
      chipContainer.appendChild(createChip(amount));
    }
    if (stateSelect && stateSelect.value !== 'allstate') {
      const text = stateSelect.options[stateSelect.selectedIndex].text;
      chipContainer.appendChild(createChip(text));
    }

    updateFilterCount();

    // Opcional: Cierra el dropdown y el overlay si existen
    const dropdownFilter = document.querySelector('.js-dropdown-filter');
    const overlay = document.querySelector('.js-overlay');
    if (dropdownFilter && overlay) {
      dropdownFilter.classList.remove('next-renovation__dropdown-filter--active');
      overlay.classList.remove('page-overlay--active');
      document.body.style.overflow = "";
    }
  });
});
