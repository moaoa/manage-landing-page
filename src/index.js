import Splide from "@splidejs/splide";
import "../node_modules/@splidejs/splide/dist/css/splide.min.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const navToggler = document.querySelector(".header__nav__toggler");
const navList = document.querySelector(".header__nav ul");
const overlay = document.querySelector(".overlay");
navToggler.addEventListener("click", () => {
  navList.classList.toggle("open");
  overlay.classList.toggle("open");
  navToggler.classList.toggle("open");
});
const setSlider = () => {
  if (window.innerWidth > 900) {
    new Splide(".splide", {
      perPage: 3,
      rewind: true,
    }).mount();
  } else new Splide(".splide").mount();
};

document.addEventListener("DOMContentLoaded", function () {
  setSlider();
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero__charts", {
  scrollTrigger: ".hero__charts",
  y: 30,
  duration: 2,
  opacity: 0,
});

gsap.from(".testimonials .btn", {
  scrollTrigger: {
    trigger: ".testimonials .btn",
    toggleActions: "restart pause restart pause",
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "elistic",
  onUpdate: () => console.log("updated"),
});
