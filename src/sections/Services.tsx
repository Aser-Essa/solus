import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Services() {
  useGSAP(() => {
    const titleSplit = SplitText.create(
      ".services-Section-Container .section-title",
      {
        type: "chars",
      }
    );

    const sectionDescription = SplitText.create(
      ".services-Section-Container .section-description",
      {
        type: "words, lines",
      }
    );

    const cardTitle = SplitText.create(
      ".services-Section-Container .card-title",
      {
        type: "chars",
      }
    );

    const cardDescription = SplitText.create(
      ".services-Section-Container .card-desc",
      {
        type: "words, lines",
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "0% 80%",
        end: "bottom 65%",
        trigger: ".services-Section-Container",
        scrub: 3,
      },
    });

    tl.from(".services-Section-Container .section-eyebrow", {
      xPercent: -200,
    })
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
          yPercent: 100,
          opacity: 0,
          stagger: 0.02,
          ease: "power1.inOut",
        },
        "-=0.2"
      )
      .from(
        ".left-card",
        {
          duration: 0.5,
          xPercent: -100,
          opacity: 0,
          ease: "power1.inOut",
        },
        "-=0.4"
      )
      .from(
        ".hearts-img",
        {
          duration: 0.3,
          opacity: 0,
          scale: 0,
          yPercent: 100,
        },
        "-=0.15"
      )
      .from(
        ".right-card",
        {
          duration: 0.5,
          xPercent: 100,
          opacity: 0,
          ease: "power1.inOut",
        },
        "-=0.65"
      )
      .from(".bottom-card", {
        opacity: 0,
      })
      .to(
        ".bottom-card",
        {
          duration: 0.6,
          delay: 0.4,
          clipPath: " polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power1.inOut",
        },
        "<"
      )
      .from(
        cardTitle.chars,
        {
          duration: 0.35,
          yPercent: 100,
          stagger: 0.02,
          ease: "power1.inOut",
        },
        "-=0.2"
      )
      .from(
        cardDescription.words,
        {
          duration: 0.35,
          left: 100,
          opacity: 0,
          stagger: 0.02,
          ease: "power1.inOut",
        },
        "-=0.2"
      )
      .to(
        ".services-Section-Container button",
        {
          duration: 0.4,
          scale: 1,
          ease: "back.out(1.5)",
        },
        "-=0.2"
      );
  });

  return (
    <>
      <section className="services-Section-Container xl:px-22.5 lg:px-10 px-5 mb-20 md:mb-37.5 ">
        <div className=" space-y-3 md:space-y-5 text-center mb-12 md:mb-20 overflow-hidden">
          <div className=" w-fit mx-auto  overflow-hidden ">
            <p className="section-eyebrow text-sm font-medium overflow-hidden">
              SERVICES
            </p>
          </div>

          <p className="section-title font-bold text-[clamp(34px,5vw,52px)] leading-tight overflow-hidden">
            Your Path to
            <br /> Well-being
          </p>
          <p className="section-description text-[clamp(16px,2.3vw,22px)]">
            Discover expert guidance for a healthier
            <br /> mind and balanced life.
          </p>
        </div>

        <div className=" flex items-center flex-wrap gap-10">
          <div className="left-card overflow-hidden relative bg-[#F9E6D0]  flex-1 min-w-[250px] md:h-[455px] rounded-[50px] lg:rounded-[60px] px-8 md:px-15 py-11.75 md:pt-[75px] space-y-6 md:space-y-[35px]">
            <img
              src="/hearts.svg"
              className="hearts-img absolute top-[59px] right-[52.8px] hidden lg:block"
            />
            <p className=" font-semibold  text-[clamp(28px,4vw,40px)] leading-tight">
              Mindfulness & <br />
              Meditation
            </p>
            <p className="  text-[clamp(18px,3vw,20px)]">
              Guided meditation sessions
              <br className=" hidden md:flex" /> and stress management <br />
              techniques.
            </p>
            <Button className=" text-dark-green border border-dark-green h-13.5 py-0">
              Learn more
            </Button>
          </div>

          <div className="right-card bg-white flex-1 min-w-[250px] md:h-[455px] rounded-[50px] lg:rounded-[60px] px-8 md:px-15 py-11.75 md:pt-[75px] space-y-6 md:space-y-[35px]">
            <p className=" font-semibold text-[clamp(28px,4vw,40px)] leading-tight">
              One-on-One
              <br /> Therapy
            </p>
            <p className="  text-[clamp(18px,3vw,20px)]">
              Virtual and in-person therapy
              <br className=" hidden md:flex" /> sessions with licensed <br />
              professionals.
            </p>
            <Button className=" text-dark-green border border-dark-green h-13.5 py-0">
              Learn more
            </Button>
          </div>
        </div>

        <div
          className="bottom-card relative bg-white w-full md:h-[455px] overflow-hidden rounded-[50px] lg:rounded-[60px] px-8 md:px-15 py-11.75 md:pt-[75px] space-y-6 md:space-y-[35px] mt-10"
          style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        >
          <img
            src="/mirror.svg"
            className=" absolute right-0 bottom-0 !m-0 w-[38%] hidden md:block "
          />
          <p className="card-title font-semibold text-[clamp(28px,4vw,40px)] leading-tight overflow-hidden">
            Wellness Coaching
          </p>
          <p className="card-desc text-[clamp(18px,3vw,20px)]  overflow-hidden">
            Personalized guidance to help you build healthier habits,
            <br /> manage stress, and achieve balance in all areas of your life.
            <br />
            <br />
            Our wellness coaches support you in creating sustainable
            <br /> routines for mental, emotional, and physical well-being.
          </p>
          <Button className=" bg-dark-green  h-13.5 py-0 scale-0">
            Learn more
          </Button>
        </div>
      </section>
    </>
  );
}
