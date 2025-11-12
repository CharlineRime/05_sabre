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
  x: "500%",
});

timeline1.to("#second-section-left-2", {
  opacity: 1,
  x: "200%",
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
  x: "-120%",
});
timeline2.to("#object-left-1", {
  opacity: 1,
  x: "-120%",
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
  x: "200%",
});

// Wrap 4
const timeline4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".eigth-section",
    scrub: true,
    pin: true,
  },
});

timeline4.to("#eigth-section-text", {
  opacity: 1,
  y: "25%",
});
timeline4.to("#eigth-section-left-1", {
  opacity: 1,
  x: "-150%",
});

timeline4.to("#eigth-section-left-2", {
  opacity: 1,
  x: "-150%",
});

// Wrap 5
const timeline5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".tenth-section",
    scrub: true,
    pin: true,
  },
});

timeline5.to("#tenth-section-text", {
  opacity: 1,
  y: "25%",
});
timeline5.to("#tenth-section", {
  opacity: 1,
  x: "125%",
});
