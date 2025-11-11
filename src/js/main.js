import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Page de titre

gsap.to("h1", {
  opacity: 1,
  y: -150,
  scrollTrigger: {
    trigger: ".first-section-title",
    scrub: true,
  },
});

// Wrap
const timeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-section",
    scrub: true,
    pin: true,
  },
});

timeline1.to("#object-text", {
  opacity: 1,
  y: "25%",
});
timeline1.to("#object-left-1", {
  opacity: 1,
  x: "300%",
});

timeline1.to("#object-left-2", {
  opacity: 1,
  x: "250%",
});
