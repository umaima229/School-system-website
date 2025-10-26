// ==== Admission Form Submission ====
document.addEventListener("DOMContentLoaded", () => {
  const admissionForm = document.getElementById("admissionForm");
  const ackMessage = document.getElementById("ackMessage");
  
  // Admission form submit event
  admissionForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop form refresh
    
    // Show acknowledgement message with fade-in effect
    ackMessage.classList.remove("d-none");
    ackMessage.style.opacity = "0";
    ackMessage.style.transition = "opacity 0.6s ease";
    setTimeout(() => {
      ackMessage.style.opacity = "1";
    }, 100);
    
    // Reset form after submission
    admissionForm.reset();

    // Create success popup
    const successPopup = document.createElement("div");
    successPopup.classList.add("success-popup");
    successPopup.innerHTML = `
      <h3>🎉 Thank You for Applying!</h3>
      <p>Please prepare for your admission test.<br>
      You will receive further information via email.</p>
    `;

    // Append popup to body and show it
    document.body.appendChild(successPopup);
    setTimeout(() => successPopup.classList.add("show"), 100);
    
    // Hide and remove popup after 4 seconds
    setTimeout(() => {
      successPopup.classList.remove("show");
      setTimeout(() => successPopup.remove(), 500);
    }, 4000);
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
});
