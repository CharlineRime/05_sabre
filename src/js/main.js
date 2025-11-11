import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Page de titre

gsap.to("h1", {
  opacity: 1,
  y: -400,
  scrollTrigger: {
    trigger: ".first-section-h",
    scrub: true,
  },
});

// Wrap 1
const timeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-section",
    scrub: true,
    pin: true,
  },
});

timeline1.to("#second-section-text", {
  opacity: 1,
  y: "25%",
});
timeline1.to("#second-section-left-1", {
  opacity: 1,
  x: "300%",
});

timeline1.to("#second-section-left-2", {
  opacity: 1,
  x: "250%",
});

// Wrap 2
const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourth-section",
    scrub: true,
    pin: true,
  },
});

timeline2.to("#object-text", {
  opacity: 1,
  y: "25%",
});
timeline2.to("#object-left-2", {
  opacity: 1,
  x: "150%",
});
timeline2.to("#object-left-1", {
  opacity: 1,
  x: "170%",
});

// Wrap 3
const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth-section",
    scrub: true,
    pin: true,
  },
});

timeline3.to("#sixth-section-text", {
  opacity: 1,
  y: "25%",
});

timeline3.to("#sixth-section-left-1", {
  opacity: 1,
  x: "170%",
});
