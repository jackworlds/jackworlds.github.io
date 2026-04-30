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

// Плавная прокрутка для внутренних якорей (без изменения URL)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Плавная прокрутка наверх для ссылки "Главная" (href="/")
const homeLink = document.querySelector('nav a[href="/"]');
if (homeLink) {
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.location.hash) {
            history.pushState(null, null, '/');
        }
    });
}