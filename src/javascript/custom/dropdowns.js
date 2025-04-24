document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.nav__button');
    
    const closeAllDropdowns = () => {
        dropdownButtons.forEach(button => {
            const dropdown = button.nextElementSibling;
            const arrow = button.querySelector('.icon-arrow-dropdown');
            if (dropdown) dropdown.classList.remove('nav__dropdown--active');
            if (arrow) arrow.classList.remove('icon-arrow-dropdown--rotated');
        });
    };

    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = button.nextElementSibling;
            const arrow = button.querySelector('.icon-arrow-dropdown');
            
            if (!dropdown.classList.contains('nav__dropdown--active')) {
                closeAllDropdowns();
            }
            
            dropdown.classList.toggle('nav__dropdown--active');
            arrow.classList.toggle('icon-arrow-dropdown--rotated');
        });
    });

    const contactAnchor = document.querySelector('.nav__dropdown--profile a.js-nav-contact');
    const contactFragment = document.querySelector('.nav__contact');
    
    if (contactAnchor && contactFragment) {
        contactAnchor.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            contactFragment.classList.toggle('nav__contact--active');
            
            const profileDropdown = document.querySelector('.nav__dropdown--profile');
            if (profileDropdown) {
                profileDropdown.classList.remove('nav__dropdown--active');
                const button = profileDropdown.previousElementSibling;
                if (button) {
                    const arrow = button.querySelector('.icon-arrow-dropdown');
                    if (arrow) arrow.classList.remove('icon-arrow-dropdown--rotated');
                }
            }
        });
        
        document.addEventListener('click', (e) => {
            if (contactFragment.classList.contains('nav__contact--active') &&
                !e.target.closest('.nav__contact') && 
                !e.target.closest('.js-nav-contact')
            ) {
                contactFragment.classList.remove('nav__contact--active');
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav__dropdown') && !e.target.closest('.nav__button')) {
            closeAllDropdowns();
        }
    });
});
