import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Question from "../components/Question";
import { useMediaQuery } from "react-responsive";

export default function Faqs() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".faqs-section .section-title", {
      type: "chars",
    });

    const sectionDescription = SplitText.create(
      ".faqs-section .section-description",
      {
        type: "words, lines",
        linesClass: "line",
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 75%",
        end: "bottom bottom",
        trigger: ".faqs-section",
        scrub: isMobile ? false : 2,
      },
    });

    tl.from(
      ".faqs-section  .section-eyebrow",
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
        "-=0.3"
      )
      .from(".questions-list .question", {
        xPercent: 100,
        opacity: 0,
        rotate: 10,
        stagger: 0.3,
      })
      .to(
        ".faqs-section-img-bg",
        {
          duration: 0.8,
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power1.inOut",
        },
        "-=.2"
      )
      .from(".faqs-section-img", {
        opacity: 0,
        yPercent: 100,
      });
  });

  return (
    <>
      <section className="faqs-section xl:mx-22.5 md:mx-10 mx-5 mb-20 md:mb-37.5 min-h-243.75 flex flex-wrap lg:flex-nowrap items-start md:items-end justify-between  md:gap-12.5 ">
        <div className=" space-y-5 md:space-y-10 flex-1">
          <div className=" overflow-hidden">
            <p className=" section-eyebrow text-sm font-medium  overflow-hidden">
              NEED HELP?
            </p>
          </div>
          <p className="section-title font-bold text-[clamp(34px,5vw,52px)] leading-tight  overflow-hidden">
            Frequently
            <br /> Asked Questions
          </p>
          <p className="section-description text-[clamp(16px,2.3vw,22px)]">
            Find answers to common questions about <br /> our services, therapy,
            and mental well- <br className=" hidden lg:block" />
            being.
          </p>
          <div className="hidden lg:flex h-150.5  items-end mt-2.5 overflow-hidden">
            <div className="relative faqs-section-img-container ">
              <div
                className="faqs-section-img-bg   bg-[#F9E6D0] h-96.25 w-full min-w-[570px] rounded-[50px] lg:rounded-[60px] "
                style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              ></div>
              <img
                src="/faqs-section-img.svg"
                className="faqs-section-img absolute mt-2.5 bottom-0  left-[70px] "
              />
            </div>
          </div>
        </div>

        <div className="questions-list space-y-5 w-full overflow-hidden">
          <Question
            question={"How do I book a therapy session?"}
            answer={
              "How do I book a therapy session? How do I book a therapy session? How do I book a therapy session? How do I book a therapy session?"
            }
          />

          <Question
            question={"Are online sessions available?"}
            answer={
              "How do I book a therapy session? How do I book a therapy session? How do I book a therapy session? How do I book a therapy session?"
            }
          />

          <Question
            question={"What’s the difference between therapy and coaching?"}
            answer={
              "How do I book a therapy session? How do I book a therapy session? How do I book a therapy session? How do I book a therapy session?"
            }
          />

          <Question
            question={"Do I need a subscription to access services?"}
            answer={
              "How do I book a therapy session? How do I book a therapy session? How do I book a therapy session? How do I book a therapy session?"
            }
          />

          <Question
            question={
              "Can I switch therapists if I don’t feel the right connection?"
            }
            answer={
              "How do I book a therapy session? How do I book a therapy session? How do I book a therapy session? How do I book a therapy session?"
            }
          />

          <Question
            question={
              "Is my information and session history kept confidential?"
            }
            answer={
              "How do I book a therapy session? How do I book a therapy session? How do I book a therapy session? How do I book a therapy session?"
            }
          />
        </div>
      </section>
    </>
  );
}
