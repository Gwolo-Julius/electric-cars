/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const closeMenu = document.querySelector(".nav__close");
const navLink = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

/*=============== REMOVE MENU MOBILE ===============*/

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

function linkAction() {
  navMenu.classList.remove("show-menu");
}

navLink.forEach((link) => {
  link.addEventListener("click", linkAction);
});
/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
  const header = document.querySelector(".header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/*=============== POPULAR SWIPER ===============*/
let swiper = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  breakpoints: {
    768: {
      slidePreView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
const mixer = mixitup(".featured__content", {
  selectors: {
    target: ".featured__card",
  },

  animation: {
    duration: 300,
  },
});

/* Link active featured */

const linkFeatured = document.querySelectorAll(".featured__item");

function activeFeatured() {
  linkFeatured.forEach((link) => link.classList.remove("active-featured"));
  this.classList.add("active-featured");
}

linkFeatured.forEach((link) => link.addEventListener("click", activeFeatured));

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  SpeechRecognitionResult.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTo + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`);
sr.reveal(`.home__subtitle`, { delay: 500 });
sr.reveal(`.home__elec`, { delay: 600 });
sr.reveal(`.home__img`, { delay: 800 });
sr.reveal(`.home__car-data`, { delay: 900, interval: 100, origin: "bottom" });
sr.reveal(`.home__button`, { delay: 1000, interval: 100, origin: "bottom" });
sr.reveal(`.about__group, .offer__data`, { origin: "left" });
sr.reveal(`.about__data, .offer__img`, { origin: "right" });
sr.reveal(`.features__map`, { delay: 600, origin: "bottom" });
sr.reveal(`.features__card`, { interval: 300 });
sr.reveal(`.featured__card, .logo__content, .footer__content`, { interval: 100 });
