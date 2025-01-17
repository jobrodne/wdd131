// Add functionality to dynamically update the footer
const footerYearSpan = document.getElementById('currentYear');
const lastModifiedSpan = document.getElementById('lastModified');

// Set the current year in the footer
footerYearSpan.textContent = new Date().getFullYear();

// Get the last modified date of the document and format it
const lastModified = new Date(document.lastModified);
lastModifiedSpan.textContent = lastModified.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

// Hamburger menu functionality (if applicable for mobile)
const nav = document.querySelector('nav');
const hamburgerButton = document.createElement('button');
hamburgerButton.textContent = '≡';
hamburgerButton.style.background = 'none';
hamburgerButton.style.color = 'white';
hamburgerButton.style.fontSize = '1.5rem';
hamburgerButton.style.border = 'none';
hamburgerButton.style.margin = '0.5rem';
nav.prepend(hamburgerButton);
nav.classList.toggle('responsive');
hamburgerButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});

if (window.matchMedia('(min-width: 768px)').matches) {
    nav.querySelector('ul').style.display = 'none';
    nav.classList.remove('open');
    hamburgerButton.addEventListener('click', () => {
        const menu = nav.querySelector('ul');
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        nav.classList.toggle('open');
    });
}