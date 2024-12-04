const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-bar a');
const menu = document.querySelectorAll('.menu-icon');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight; 

        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
            current = section.getAttribute('id'); 
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active'); 
        }
    });
    
});

