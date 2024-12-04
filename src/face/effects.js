document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("scrolled");
                observer.unobserve(aboutSection); 
            }
        });
    }, { threshold: 0.2 }); 

    observer.observe(aboutSection);
});

let currentIndex = 0;

function updateSlides() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        slide.style.opacity = "0";

        if (index === currentIndex) {
            slide.classList.add('active');
            slide.style.transform = "translateX(0) scale(1.2)";
            slide.style.opacity = "1";
        } else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
            slide.style.transform = "translateX(-150px) rotateY(30deg) scale(1)";
            slide.style.opacity = "0.7";
        } else if (index === (currentIndex + 1) % totalSlides) {
            slide.style.transform = "translateX(150px) rotateY(-30deg) scale(1)";
            slide.style.opacity = "0.7";
        } else {
            slide.style.transform = "scale(0.8)";
            slide.style.opacity = "0.5";
        }
    });
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    updateSlides();
});
