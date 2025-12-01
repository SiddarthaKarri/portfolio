// Navigation toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('header-scrolled', window.scrollY > 50);
});

// Create floating particles
const particlesContainer = document.getElementById('particles');

function createParticles() {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random pos
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const size = Math.random() * 15 + 5;
        const delay = Math.random() * 5;

        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDelay = `${delay}s`;

        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const skillsSection = document.querySelector('#skills');

function checkSkills() {
    const triggerBottom = window.innerHeight * 0.8;
    const skillsSectionTop = skillsSection.getBoundingClientRect().top;

    if (skillsSectionTop < triggerBottom) {
        skillBars.forEach(bar => {
            const width = bar.dataset.width;
            bar.style.width = width;
        });
        window.removeEventListener('scroll', checkSkills);
    }
}

window.addEventListener('scroll', checkSkills);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        // Close mobile nav if open
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});