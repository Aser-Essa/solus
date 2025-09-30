import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Explore() {
  useGSAP(() => {
    const titleSplit = SplitText.create(".explore-section .section-title", {
      type: "chars",
    });

    const sectionDescription = SplitText.create(
      ".explore-section .section-description",
      {
        type: "words, lines",
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 60%",
        end: "bottom bottom",
        trigger: ".explore-section",
        toggleActions: "play play play reverse",
      },
    });

    tl.from(
      ".explore-section  .section-eyebrow",
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
      .to(".explore-section button", {
        duration: 0.25,
        scale: 1,
        ease: "power1.Out",
      })
      .from(
        ".explore-card",
        {
          yPercent: 120,
          stagger: 0.2,
          ease: "power1.inOut",
        },
        "-=0.3"
      );
  });

  return (
    <>
      <section className="explore-section xl:mx-22.5 md:mx-10 mx-5 mb-22 md:mb-35 ">
        <div className=" space-y-5 text-center mb-12 md:mb-20 overflow-hidden">
          <div className=" w-fit mx-auto  overflow-hidden ">
            <p className="section-eyebrow text-sm font-medium overflow-hidden">
              EXPLORE & LEARN
            </p>
          </div>

          <p className="section-title font-bold text-[clamp(34px,5vw,52px)] leading-tight overflow-hidden">
            Resources for <br /> Your Well-being
          </p>
          <p className="section-description text-[clamp(16px,2.3vw,22px)] overflow-hidden">
            Explore expert insights, self-care guides,
            <br /> and tools to support your mental health.
          </p>
        </div>

        <div className=" flex flex-wrap items-center justify-between gap-10 overflow-hidden">
          <div className="explore-card w-full flex-1 max-md:space-y-10 md:h-[404px] bg-white rounded-[50px] lg:rounded-[60px] px-8 py-12 md:pt-15 md:pb-18.75 md:px-17.5  text-center flex flex-col justify-between items-center">
            <div>
              <p className=" text-[30px] font-semibold text-dark-green mb-5 leading-[36px]">
                Articles &<br /> Guides
              </p>
              <p>
                Practical tips on stress <br />
                management, mindfulness, and <br />
                emotional resilience.
              </p>
            </div>
            <Button className=" bg-[#EFC01D] h-[54px] w-[155px] p-0">
              Explore
            </Button>
          </div>

          <div className="explore-card w-full flex-1 max-md:space-y-10 md:h-[404px] bg-white rounded-[50px] lg:rounded-[60px] px-8 py-12 md:pt-15 md:pb-18.75 md:px-17.5 text-center flex flex-col justify-between items-center">
            <div>
              <p className=" text-[30px] font-semibold text-dark-green mb-5 leading-[36px]">
                Meditation &<br /> Relaxation
              </p>
              <p>
                Audio sessions for guided
                <br /> meditation and deep breathing
                <br />
                exercises.
              </p>
            </div>
            <Button className=" bg-[#4CCBBB] h-[54px] w-[155px] p-0">
              Explore
            </Button>
          </div>

          <div className="explore-card w-full flex-1 max-md:space-y-10 md:h-[404px] bg-white rounded-[50px] lg:rounded-[60px] px-8 py-12 md:pt-15 md:pb-18.75 md:px-17.5 text-center flex flex-col justify-between items-center">
            <div>
              <p className=" text-[30px] font-semibold text-dark-green mb-5 leading-[36px]">
                Webinars &<br /> Workshops
              </p>
              <p>
                Live and recorded sessions with
                <br /> mental health professionals.
              </p>
            </div>
            <Button className=" bg-[#F39CAC] h-[54px] w-[155px] p-0">
              Explore
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
