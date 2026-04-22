// Smooth scroll + offset navbar
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 80, // biar gak ketutup navbar
            behavior: 'smooth'
        });
    });
});

const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});