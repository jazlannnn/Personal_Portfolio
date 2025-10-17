// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ===== Tabs in About Section =====
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active states
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Activate current
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

  

// Unified Typewriter Effect (Name + Roles)
const texts = [
    "Muhammad Jazlan",
    "a Software Engineer",
    "a Mobile & Web Developer",
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeElement = document.getElementById("typewriter-text");
  let typeSpeed = 120;
  const pauseTime = 1500;
  
  function typeEffect() {
    const currentText = texts[textIndex];
  
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }
  
    typeElement.textContent = currentText.substring(0, charIndex);
  
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typeSpeed = pauseTime;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500;
    } else {
      typeSpeed = isDeleting ? 70 : 100;
    }
  
    setTimeout(typeEffect, typeSpeed);
  }
  
  typeEffect();
  