document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.nav__button');
    
    // Función para cerrar todos los dropdowns
    const closeAllDropdowns = () => {
        dropdownButtons.forEach(button => {
            const dropdown = button.nextElementSibling;
            const arrow = button.querySelector('.icon-arrow-dropdown');
            dropdown.classList.remove('nav__dropdown--active');
            arrow.classList.remove('icon-arrow-dropdown--rotated');
        });
    };

    // Event listeners para los botones de dropdown
    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = button.nextElementSibling;
            const arrow = button.querySelector('.icon-arrow-dropdown');
            
            // Cerrar otros dropdowns antes de abrir este
            if (!dropdown.classList.contains('nav__dropdown--active')) {
                closeAllDropdowns();
            }
            
            // Toggle estado activo
            dropdown.classList.toggle('nav__dropdown--active');
            arrow.classList.toggle('icon-arrow-dropdown--rotated');
        });
    });

    // Cerrar dropdowns al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav__dropdown') && !e.target.closest('.nav__button')) {
            closeAllDropdowns();
        }
    });
});