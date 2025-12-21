import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export function animateAboutSection() {
  gsap.utils.toArray(".stat-item h3").forEach((element) => {
    let textContent = element.textContent;
    let targetText = textContent.trim();

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.75,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          once: true,
        },
      }
    );

    gsap.to(element, {
      scrambleText: {
        text: targetText,
        tweenLength: true,
        speed: 50,
      },
      duration: 2.75,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        once: true,
        onEnter: () => {
          gsap.set(element, { textContent: targetText });
        },
      },
    });
  });

  gsap.fromTo(
    ".about-us-img",
    {
      opacity: 0,
      x: 50,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-us-img",
        start: "top 80%",
        once: true,
      },
    }
  );
}

export function animateClinicSection() {

  gsap.fromTo(
    ".first-clinic-img",
    {
      opacity: 0,
      x: 50,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1.75,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".first-clinic-img",
        start: "top 85%",
        once: true,
      },
    }
  );


  gsap.fromTo(
    ".second-clinic-img",
    {
      opacity: 0,
      x: 50,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1.75,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".second-clinic-img",
        start: "top 85%",
        once: true,
      },
    }
  );
}

export function animateServiceSlider() {
  gsap.to(".slider-inner", {
    x: "-100%",
    duration: 420,
    repeat: -1,
    yoyo: true,
  });
}
