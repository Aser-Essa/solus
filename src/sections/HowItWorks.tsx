import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function HowItWorks() {
  useGSAP(() => {
    const titleSplit = SplitText.create(".HowItWorks-Section .section-title", {
      type: "chars",
    });

    const sectionDescription = SplitText.create(
      ".HowItWorks-Section .section-description",
      {
        type: "words, lines",
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 80%",
        end: "bottom 70%",
        trigger: ".HowItWorks-Section",
        scrub: true,
      },
    });

    tl.from(".HowItWorks-img", {
      duration: 0.6,
      yPercent: 150,
      rotate: 90,
    })
      .from(
        ".HowItWorks-Section  .section-eyebrow",
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
        "-=0.2"
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
        "-=0.2"
      )
      // .to(".HowItWorks-Section button", {
      //   duration: 0.25,
      //   scale: 1.1,
      //   ease: "power1.Out",
      // })
      .to(".HowItWorks-Section button", {
        duration: 0.25,
        scale: 1,
        ease: "power1.Out",
      });
  });

  return (
    <>
      <section className="HowItWorks-Section xl:px-22.5 lg:px-10 px-5 mb-22 md:mb-37.5 flex flex-col-reverse md:flex-row gap-12 items-center justify-between  overflow-hidden ">
        <div className=" md:max-w-[470px] space-y-5 md:space-y-9 ">
          <div className="overflow-hidden space-y-5 md:space-y-9">
            <p className="section-eyebrow text-sm font-medium overflow-hidden">
              HOW IT WORKS
            </p>
            <p className="section-title font-bold  text-[clamp(34px,5vw,52px)] leading-tight overflow-hidden">
              We Help You <br /> Prioritize Your
              <br /> Mental Health
            </p>
            <p className="section-description text-[clamp(16px,2.3vw,22px)]">
              Browse therapists, book a session, and
              <br className="hidden lg:block" /> start your healing journey with
              trusted
              <br className="hidden lg:block" /> professionals.
            </p>
          </div>

          <Button className="bg-dark-green scale-0">Find a Therapist</Button>
        </div>

        <div className="HowItWorks-img relative w-full md:max-w-[550px] aspect-square  bg-dark-green rounded-[50px] lg:rounded-[60px] ">
          <img
            src="/HowItWorks-section-img.svg"
            className=" absolute bottom-0 left-1/2  -translate-x-1/2 w-[75%]"
          />
        </div>
      </section>
    </>
  );
}
