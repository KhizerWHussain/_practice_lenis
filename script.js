const lenis = new Lenis({
  infinite: false,
  smoothWheel: true,
  lerp: 0.1,
  syncTouch: true,
  syncTouchLerp: 0.075,
});

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// gsap.registerPlugin(ScrollTriger);

document.querySelectorAll(".elem").forEach((item) => {
  let img = item.querySelector("img");
  let tl = gsap.timeline();

  let xTransfrom = gsap.utils.random(-100, 100);

  tl.set(
    img,
    {
      transformOrigin: `${xTransfrom < 0 ? 0 : "100%"}`,
    },
    "start"
  )
    .to(
      img,
      {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
      "start"
    )
    .to(img, {
      xPercent: xTransfrom,
      // ease: "Power4.easeInOut",
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
});
