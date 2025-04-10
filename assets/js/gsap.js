gsap.from(".section h1", {
  opacity: 0,
  y: -50,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from(".section p", {
  opacity: 0,
  y: 30,
  duration: 1.5,
  ease: "power4.out",
  stagger: 0.2
});

gsap.from(".card", {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1.5,
  ease: "power3.out"
});


gsap.from(".icon", {
  opacity: 0,
  rotation: -180,
  duration: 1,
  ease: "power2.out",
  stagger: 0.3
});

gsap.from("body", {
  opacity: 0,
  duration: 2,
  ease: "power3.out"
});

const button = document.getElementById("downloadCV");

button.addEventListener("mouseenter", () => {
  gsap.to(button, { scale: 1.05, duration: 0.3 });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, { scale: 1, duration: 0.3 });
});


const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, { color: "#facc15", borderColor: "#facc15", duration: 0.3 });
  });

  link.addEventListener("mouseleave", () => {
    if (!link.classList.contains("active")) {
      gsap.to(link, { color: "#fff", borderColor: "transparent", duration: 0.3 });
    }
  });
});





const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power3.out" });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 0.3, ease: "power3.out" });
  });
});



gsap.from(".flip-card", {
  opacity: 0,  // Начинаем с прозрачности 0
  y: 50,  // Начинаем с сдвига вниз
  stagger: 0.2,  // Задержка между анимациями для каждой карточки
  duration: 1.5,  // Длительность анимации
  ease: "power3.out"  // Тип easing для более плавного эффекта
});

// Анимация вращения карточек при наведении
const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card.querySelector(".flip-card-inner"), { 
      rotationY: 180, 
      duration: 0.5, 
      ease: "power2.inOut" 
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card.querySelector(".flip-card-inner"), { 
      rotationY: 0, 
      duration: 0.5, 
      ease: "power2.inOut" 
    });
    
  });
});


window.onload = function() {
  // Анимировать форму, плавно показывая её элементы
  gsap.from(".contact-form", { opacity: 0, y: -50, duration: 1, delay: 0.5 });

  // Анимация для полей ввода
  gsap.from("#name", { opacity: 0, x: -100, duration: 1, delay: 1 });
  gsap.from("#email", { opacity: 0, x: -100, duration: 1, delay: 1.2 });
  gsap.from("#message", { opacity: 0, x: -100, duration: 1, delay: 1.4 });

  // Анимация для кнопки
  gsap.from(".submit-btn", { opacity: 0, scale: 0.8, duration: 1, delay: 1.6 });
};

gsap.from("#name", { opacity: 0, x: -100, duration: 1, delay: 1 });
gsap.from("#email", { opacity: 0, x: -100, duration: 1, delay: 1.2 });
gsap.from("#message", { opacity: 0, x: -100, duration: 1, delay: 1.4 });


gsap.from(".submit-btn", { opacity: 0, scale: 0.8, duration: 1, delay: 1.6 });