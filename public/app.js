const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navigation a');
const header = document.querySelector('.header');
const btnHome = document.querySelector('.btn-home');
const menuicon = document.getElementById('menu-burger');
const nav = document.querySelector('.navigation');


const burgerActive = () => {
    menuicon.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

const scrollActive = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('.navigation a[href*=' + id + ']').classList.add('active');
        }
    });

}


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .section-title', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-content .portfolio-box, .contact', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



const typed = new Typed('.multiple', {
    strings: ['Développeur Front-End', 'Développeur Back-End', 'Développeur Full-Stack'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

menuicon.addEventListener('click', burgerActive);

window.addEventListener('scroll', () => {
    scrollActive();
});
