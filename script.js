// ==== Admission Form Submission ====
document.getElementById("admissionForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const ack = document.getElementById("ackMessage");
  ack.classList.remove("d-none");
  ack.style.opacity = "0";
  ack.style.transition = "opacity 0.6s ease";
  setTimeout(() => (ack.style.opacity = "1"), 100);
  this.reset();
});

// ==== Smooth Scroll for Navbar Links ====
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==== Scroll Reveal Animation ====
const fadeElems = document.querySelectorAll('.fade-in');

function revealOnScroll() {
  fadeElems.forEach(elem => {
    const elemTop = elem.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elemTop < windowHeight - 100) {
      elem.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ==== Navbar Color Change on Scroll ====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-sm', 'bg-gradient');
  } else {
    navbar.classList.remove('shadow-sm', 'bg-gradient');
  }
});
// ==== Admission Form Submission ====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("admissionForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop form refresh

    // Create success popup
    const popup = document.createElement("div");
    popup.classList.add("success-popup");
    popup.innerHTML = `
      <h3>🎉 Thank You for Applying!</h3>
      <p>Please prepare for your admission test.<br>
      You will receive further information via email.</p>
    `;

    // Add popup to page
    document.body.appendChild(popup);

    // Animate popup appearance
    setTimeout(() => popup.classList.add("show"), 100);

    // Hide after 4 seconds
    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => popup.remove(), 500);
    }, 4000);

    // Reset form
    form.reset();
  });
});
// ==== Navbar Scroll Effect ====
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
