const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle Mobile Menu
menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
