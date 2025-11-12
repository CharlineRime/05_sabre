import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Page de titre

gsap.to("h1", {
  opacity: 1,
  y: -300,
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
    end: "+=200%bottom",
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
    end: "+=200%bottom",
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
    end: "+=200%bottom",
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
    end: "+=200%bottom",
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
    end: "+=200%bottom",
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

// easter egg

const container = document.querySelector(".twelveth-section-easter-egg");
const wet = document.querySelector(".twelveth-section-easter-egg-wet");
const fluffy = document.querySelector(".twelveth-section-easter-egg-fluffy");

container.addEventListener("click", () => {
  wet.classList.toggle("twelveth-section-visible");
  fluffy.classList.toggle("twelveth-section-visible");
});

// parallax 1
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".parallax-container",
      start: "top top",
      scrub: 2,
      pin: true,
    },
  })
  .to("#element-3", {
    x: -200,
  })
  .to(
    "#element-1",
    {
      x: -300,
    },
    0
  )
  .to(
    "#element-2",
    {
      x: 200,
    },
    0
  );

// parallax 3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".seventh-section",
      start: "top top",
      scrub: 2,
    },
  })
  .to("#element-9", {
    x: -300,
  })
  .to(
    "#element-10",
    {
      x: 300,
    },
    0
  );
