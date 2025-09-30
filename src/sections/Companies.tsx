import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Companies() {
  useGSAP(() => {
    const splitTitle = SplitText.create(".companies-section .section-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 90%",
        end: "bottom 65%",
        trigger: ".companies-section",
        toggleActions: "play play play reverse",
      },
    });

    tl.to(".companies-section", {
      duration: 0.8,
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power1.inOut",
    })
      .from(
        splitTitle.chars,
        {
          duration: 0.3,
          yPercent: 120,
          opacity: 0,
          stagger: 0.03,
          ease: "power3.out",
        },
        "-=.2"
      )
      .from(
        ".companies-section img",
        {
          duration: 0.4,
          opacity: 0,
          scale: 0,
          stagger: 0.2,
          ease: "back.out(1.5)",
        },
        "-=.2"
      );
  });

  return (
    <section
      className="companies-section xl:mx-22.5 opacity-35  md:mx-10 mx-5 mb-20 md:mb-30 px-8 py-12 md:py-16.5 md:px-12.5 min-h-39.5 rounded-[50px] lg:rounded-[60px] bg-white flex flex-wrap flex-col sm:flex-row items-center justify-center md:justify-between gap-12 md:gap-16"
      style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
    >
      <p className="section-title text-[22px] font-medium text-dark-green overflow-hidden">
        Our Partners
      </p>
      <img src="/Company logo.svg" />
      <img src="/Company logo (1).svg" />
      <img src="/Company logo (2).svg" />
      <img src="/Company logo (3).svg" />
      <img src="/Company logo (4).svg" />
    </section>
  );
}
