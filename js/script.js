// Мобильное меню
const toggleBtn = document.getElementById('mobileToggle');
const navMenu = document.querySelector('nav ul');

if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// Закрываем меню при клике на ссылку
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });
});