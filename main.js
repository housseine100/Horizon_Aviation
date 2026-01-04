const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});





// SIMULATION DE RÉSERVATION (BOOK BUTTONS)
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {

    const booking = {
      date: new Date().toLocaleString(),
      page: document.title,
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("✈️ Your booking request has been saved!");
  });
});


// === FEEDBACK UTILISATEUR (SANS HTML) ===

// récupérer tous les boutons "Book"
const bookButtons = document.querySelectorAll(".btn");

// fonction pour afficher un message temporaire
function showFeedback(message) {
  const feedback = document.createElement("div");
  feedback.textContent = message;

  feedback.style.position = "fixed";
  feedback.style.bottom = "20px";
  feedback.style.right = "20px";
  feedback.style.padding = "15px 20px";
  feedback.style.backgroundColor = "#2887ff";
  feedback.style.color = "#fff";
  feedback.style.borderRadius = "10px";
  feedback.style.fontWeight = "600";
  feedback.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
  feedback.style.zIndex = "9999";

  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.remove();
  }, 3000);
}

// activer les boutons
bookButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    showFeedback("✅ Reservation saved successfully");
  });
});

// --- Scroll fluide pour le menu HOME / ABOUT / TOUR / PACKAGE / CONTACT ---

document.querySelectorAll('.nav__links a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); // enlève le #
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

