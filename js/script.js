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

// Плавная прокрутка без изменения URL (адрес остаётся чистым)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // отменяем переход по ссылке
        const targetId = this.getAttribute('href'); // например, "#worlds"
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});