import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export default function HeroSection() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", { type: "chars" });

    const subTitleSplit = SplitText.create(".hero-subTitle", {
      type: "words, lines",
      linesClass: "line",
    });

    const timeLine = gsap.timeline({
      scrollTrigger: {
        start: "top 20%",
        end: "86% 20%",
        trigger: ".hero-container",

        toggleActions: isMobile
          ? "play play play play"
          : "play reverse play reverse",
      },
      delay: 0.6,
    });

    timeLine
      .to(".hero-container", {
        duration: 0.6,
        clipPath: " polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power1.inOut",
      })
      .from(
        titleSplit.chars,
        {
          duration: 0.35,
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.1"
      )
      .from(
        subTitleSplit.words,
        {
          duration: 0.35,
          left: 100,
          opacity: 0,
          stagger: 0.02,
          ease: "power1.inOut",
        },
        "-=0.35"
      )
      .to(".hero-container button", {
        duration: 0.4,
        scale: 1,
        ease: "back.out(1.5)",
      });
  });

  return (
    <section
      className="hero-container xl:px-22.5 lg:px-10 px-5 mb-18 md:mb-25 text-center overflow-hidden"
      style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
    >
      <div className=" bg-light-yellow relative rounded-[50px] lg:rounded-[70px]  w-full md:aspect-video py-10 px-5 overflow-hidden flex flex-col items-center justify-center">
        <img
          src="/herosection1.svg"
          className=" absolute -left-11.75 bottom-0 w-[28%] hidden md:block"
        />
        <img
          src="/herosection2.svg"
          className=" absolute right-0 bottom-0  w-[30%] hidden md:block"
        />

        <p className="hero-title text-[clamp(32px,5.5vw,70px)] font-bold  leading-tight mb-3.75 overflow-hidden">
          Support for Your
          <br /> Mental Well-being
        </p>
        <p className="hero-subTitle text-[clamp(18px,2.5vw,24px)] mb-11.25 leading-7.25 overflow-hidden ">
          Connect with licensed therapists, counselors,
          <br className=" hidden md:block" /> and wellness coaches to support
          your journey.
        </p>
        <Button className="bg-dark-green scale-0">Get Started</Button>
      </div>
    </section>
  );
}
