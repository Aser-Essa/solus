import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export default function Community() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".community-section .section-title", {
      type: "chars",
    });

    const sectionDescription = SplitText.create(
      ".community-section .section-description",
      {
        type: "words, lines",
        linesClass: "line",
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 55%",
        end: "bottom bottom",
        trigger: ".community-section",
        toggleActions: isMobile
          ? "play play play play"
          : "play play play reverse",
      },
    });

    tl.to(".community-section", {
      duration: 0.8,
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power1.inOut",
    })
      .from(
        ".community-section-img",
        {
          duration: 0.7,
          opacity: 0,
          scale: 0,
          yPercent: 100,
          xPercent: 100,
        },
        "-=.2"
      )
      .from(
        ".community-section  .section-eyebrow",
        {
          xPercent: -100,
        },
        "<"
      )
      .from(
        titleSplit.chars,
        {
          duration: 0.35,
          yPercent: 300,
          stagger: 0.01,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        sectionDescription.words,
        {
          duration: 0.35,
          left: 100,
          opacity: 0,
          stagger: 0.02,
          ease: "power1.inOut",
        },
        "-=0.3"
      )
      .to(
        ".community-section button",
        {
          duration: 0.4,
          scale: 1,
          ease: "back.out(1.5)",
        },
        "-=0.3"
      );
  });

  return (
    <section
      id="therapists"
      className="community-section xl:mx-22.5 md:mx-10 mx-5 mb-22 md:mb-37.5 overflow-hidden"
      style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
    >
      <div className=" relative bg-white w-full md:h-[578px] rounded-[50px] lg:rounded-[60px] px-8 py-12 md:px-15 md:pt-[70px] space-y-5 md:space-y-10">
        <img
          src="/community-section-img.svg"
          className="community-section-img absolute right-0 bottom-0 !m-0 w-[53%] hidden md:block"
        />
        <div className=" overflow-hidden w-fit">
          <p className="section-eyebrow text-sm font-medium overflow-hidden">
            COMMUNITY
          </p>
        </div>

        <p className="section-title  font-semibold text-[clamp(32px,5vw,52px)] leading-tight overflow-hidden">
          You’re Not Alone
          <br /> on This Journey
        </p>
        <p className="section-description text-[clamp(16px,2.3vw,22px)]">
          Connect with others, share experiences,
          <br /> and find encouragement in a safe,
          <br /> supportive space.
        </p>
        <Button className=" scale-0  bg-dark-green  h-13.5 w-[281px] py-0 mt-2.5">
          Join the Community
        </Button>
      </div>
    </section>
  );
}
