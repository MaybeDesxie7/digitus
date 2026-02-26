// Scroll animation
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;

    faders.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            section.classList.add('show');
        }
    });
});