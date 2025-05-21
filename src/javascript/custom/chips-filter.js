document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.next-renovation__dropdown-filter-form');
  const filterButton = document.querySelector('.next-renovation__filter-button');

  // Comprueba si filterButton existe para evitar errores
  if (!filterButton) {
    return;
  }

  const chipContainer = document.createElement('div');
  chipContainer.classList.add('chip-container');
  filterButton.parentNode.insertBefore(chipContainer, filterButton.nextSibling);

  const createChip = (value) => {
    const chip = document.createElement('div');
    chip.classList.add('chip');
    chip.textContent = value;

    const removeBtn = document.createElement('span');
    removeBtn.classList.add('icon-close');
    removeBtn.addEventListener('click', () => {
      chip.remove();
      updateFilterCount();
    });
    chip.appendChild(removeBtn);
    return chip;
  };

  const updateFilterCount = () => {
    const midPolicies = document.querySelector('.next-renovation__mid-policies-number');
    const baseText = "770 Pólizas";
    midPolicies.innerHTML = baseText;
    const count = chipContainer.children.length;
    if (count) {
      midPolicies.appendChild(document.createTextNode(` | ${count} ${count === 1 ? 'filtro' : 'filtros'} `));

      const clearLink = document.createElement('a');
      clearLink.href = "#";
      clearLink.textContent = "Borrar filtros";
      clearLink.classList.add('clear-filters');  
      clearLink.addEventListener('click', (e) => {
        e.preventDefault();
        chipContainer.innerHTML = "";
        updateFilterCount();
      });
      midPolicies.appendChild(clearLink);
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    chipContainer.innerHTML = "";

    const policiesSelect = document.getElementById('policies-number');
    const riskName = document.getElementById('risk-name').value.trim();
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const amount = document.getElementById('amount').value;
    const stateSelect = document.getElementById('state');

    if (policiesSelect.value !== 'allpolicies') {
      const text = policiesSelect.options[policiesSelect.selectedIndex].text;
      chipContainer.appendChild(createChip(text));
    }
    if (riskName) chipContainer.appendChild(createChip(riskName));
    if (startDate || endDate) {
      chipContainer.appendChild(createChip(`${startDate || 'Inicio'} - ${endDate || 'Fin'}`));
    }
    if (amount) chipContainer.appendChild(createChip(amount));
    if (stateSelect.value !== 'allstate') {
      const text = stateSelect.options[stateSelect.selectedIndex].text;
      chipContainer.appendChild(createChip(text));
    }

    updateFilterCount();

    const dropdownFilter = document.querySelector('.next-renovation__dropdown-filter');
    const overlay = document.querySelector('.page-overlay');
    if (dropdownFilter && overlay) {
      dropdownFilter.classList.remove('next-renovation__dropdown-filter--active');
      overlay.classList.remove('page-overlay--active');
      document.body.style.overflow = "";
    }
  });
});
