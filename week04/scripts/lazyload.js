// Display the last modified date
document.getElementById("lastModified").textContent = document.lastModified;

//Lazy loadind with fade-in effect
document.addEventListener('DOMContentLoaded', () => {
const lazyImages = document.querySelectorAll('img.lazy');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add(load)
            observer.unobserve(img);
        }
    });
}, {
    threshold: 0.1
});
})