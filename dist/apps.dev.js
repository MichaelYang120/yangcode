"use strict";

var tl = gsap.timeline({
  defaults: {
    ease: "power1.out"
  }
});
tl.to('.text', {
  y: "0%",
  duration: 1,
  stagger: .30
});
tl.to('.slider', {
  y: "-100%",
  duration: 1.5,
  delay: 0.5
});
tl.to('.intro', {
  y: "-100%",
  duration: 1
}, "-=1");
tl.fromTo("nav", {
  opacity: 0
}, {
  opacity: 1,
  duration: 1
});
tl.to('.profile-img', {
  y: "340px",
  duration: 1.2,
  ease: "bounce.out"
}, "-=.7");
tl.fromTo("h2, h3, p, .button, .button2, .about-list, .mac, .iphone, .button3, hr, .project-discription", {
  x: "100%",
  opacity: 0
}, {
  x: "0%",
  opacity: 1,
  duration: 1.7,
  stagger: .30
}, "-=.2"); // navbar starts

var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', function () {
    // toggle nav 
    nav.classList.toggle('nav-active'); // Animation Links

    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 7 + 0.3, "s");
      }
    }); // burger animation

    burger.classList.toggle('toggle');
  });
};

navSlide(); // nav bar ends
// page transition