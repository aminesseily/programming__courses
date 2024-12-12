const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    
    document.getElementById('confirmationMessage').style.display = 'block';

    
    document.getElementById('contactForm').reset();
});