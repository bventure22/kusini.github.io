// Function to handle scroll effects
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    // Adds a 'scrolled' class when the user scrolls down more than 50px
    if (window.scrollY > 50) {
        navbar.style.background = '#0d1a0d'; // Darker shade on scroll
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = '#1a2e1a'; // Original color
        navbar.style.boxShadow = 'none';
    }
});

// Function for a simple "Booking Alert" on service cards
const bookButtons = document.querySelectorAll('.card-btn');

bookButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tourName = this.parentElement.querySelector('h3').innerText;
        alert(`Thank you for your interest in the "${tourName}"! \n\nRedirecting you to our booking inquiry form...`);
    });
});

// Interactive Console Welcome Message
console.log("Welcome to Kusini Tours and Safaris - Website Loaded Successfully.");
