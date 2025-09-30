import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

type Testimonial = {
  text: string;
  author: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!",
    author: "— Anna R., 32",
  },
  {
    text: "I was struggling with stress and anxiety, but the mindfulness programs on Solus have helped me regain balance. I finally feel like I'm prioritizing my mental well-being.",
    author: "— Mark S., 41",
  },
  {
    text: "Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!",
    author: "— Anna R., 32",
  },
  {
    text: "I was struggling with stress and anxiety, but the mindfulness programs on Solus have helped me regain balance. I finally feel like I'm prioritizing my mental well-being.",
    author: "— Mark S., 41",
  },
  {
    text: "Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!",
    author: "— Anna R., 32",
  },
  {
    text: "I was struggling with stress and anxiety, but the mindfulness programs on Solus have helped me regain balance. I finally feel like I'm prioritizing my mental well-being.",
    author: "— Mark S., 41",
  },
  {
    text: "Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!",
    author: "— Anna R., 32",
  },
];

export default function Testimmonials() {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [scroll, setScroll] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  function updateWidth() {
    const itemWidth = cardRef.current?.clientWidth || 0;
    setItemWidth(itemWidth);
  }

  function next() {
    if (!ref.current) return;
    const maxScroll = ref.current.scrollWidth - ref.current.offsetWidth;
    setScroll((prev) => Math.max(prev - (itemWidth + 40), -maxScroll));
  }

  function prev() {
    setScroll((prev) => Math.min(prev + (itemWidth + 40), 0));
  }

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(
      ".testimmonials-section .section-title",
      {
        type: "chars",
      }
    );

    const sectionDescription = SplitText.create(
      ".testimmonials-section .section-description",
      {
        type: "words, lines",
        linesClass: "line",
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 80%",
        end: "bottom 70%",
        trigger: ".testimmonials-section",
        toggleActions: isMobile
          ? "play play play play"
          : "play play play reverse",
      },
    });

    tl.from(
      ".testimmonials-section .section-eyebrow",
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
      .from(
        ".back-btn",
        {
          duration: 0.3,
          xPercent: -50,
          opacity: 0,
          ease: "power1.inOut",
        },
        "-=.4"
      )
      .from(
        ".next-btn",
        {
          duration: 0.3,
          xPercent: 50,
          opacity: 0,
          ease: "power1.inOut",
        },
        "<"
      )
      .from(
        ".testimmonials-row .testimmonial-card",
        {
          yPercent: 100,
          stagger: 0.2,
        },
        "-=.5"
      );
  });

  return (
    <section className="testimmonials-section xl:pl-22.5 lg:pl-10 px-5 mb-20 md:mb-37.5 flex flex-col md:flex-row  items-end justify-between gap-14 md:gap-28.5">
      <div className=" w-full text-nowrap md:h-[427px]  space-y-5 md:space-y-10 overflow-hidden">
        <p className="section-eyebrow text-sm font-medium">TESTIMONIALS</p>
        <p className="section-title font-bold text-[clamp(34px,5vw,52px)] leading-tight overflow-hidden">
          What Our Clients
          <br /> Are Saying
        </p>
        <p className="section-description text-[clamp(16px,2.3vw,22px)] overflow-hidden">
          Positive experiences from users who have
          <br /> benefited from therapy or wellness
          <br /> programs.
        </p>
        <div className=" flex items-center gap-5">
          <div
            className="back-btn size-11 md:size-13.5 flex items-center justify-center rounded-full bg-white text-dark-green text-3xl md:text-4xl cursor-pointer"
            onClick={prev}
          >
            <IoIosArrowRoundBack />
          </div>

          <div
            className="next-btn size-11 md:size-13.5  flex items-center justify-center rounded-full bg-dark-green text-white text-3xl md:text-4xl cursor-pointer"
            onClick={next}
          >
            <IoIosArrowRoundForward />
          </div>
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <div
          className="testimmonials-row flex items-center gap-10 relative  transition-all duration-600"
          ref={ref}
          style={{ left: scroll }}
        >
          {testimonials?.map((testimonial) => (
            <div
              ref={cardRef}
              className="testimmonial-card even:bg-dark-green even:text-white  odd:bg-[#F9E6D0] odd:text-dark-green w-full md:w-[393px] min-h-[360px] md:h-[393px] aspect-square px-8 py-12 md:px-12.5 md:pt-16.25 md:pb-15 rounded-[50px] lg:rounded-[60px] flex flex-col justify-between "
            >
              <p className=" text-xl">{testimonial?.text}</p>
              <p>{testimonial?.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
