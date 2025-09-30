import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Button from "../components/Button";

export default function Footer() {
  useGSAP(() => {
    const linksTitle = SplitText.create("footer .links-title  ", {
      type: "chars",
    });

    const findSupportTitle = SplitText.create(".find-support-card-title", {
      type: "words",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 80%",
        end: "bottom 65%",
        trigger: "footer",
        toggleActions: "play play play reverse",
      },
    });

    tl.to(".links-card", {
      duration: 0.8,
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power1.inOut",
    })
      .to(
        ".find-support-card",
        {
          duration: 0.8,
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power1.inOut",
        },
        "<"
      )
      .from(
        linksTitle.chars,
        {
          duration: 0.35,
          yPercent: 120,
          opacity: 0,
          stagger: 0.03,
          ease: "power3.out",
        },
        "-=.2"
      );

    gsap.utils.toArray("footer ul").forEach((ul, i) => {
      const list = ul as HTMLUListElement;

      tl.from(
        list.querySelectorAll("li"),
        {
          duration: 0.4,
          xPercent: 100,
          opacity: 0,
          stagger: 0.15,
        },
        i === 0 ? "-=.2" : "<"
      );
    });

    tl.from(
      findSupportTitle.words,
      {
        duration: 0.35,
        yPercent: 120,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
        rotate: 10,
      },
      "<+.15"
    )
      .to(
        "footer button",
        {
          duration: 0.4,
          scale: 1,
          ease: "back.out(1)",
        },
        "-=.35"
      )
      .from(
        ".footer-section-img",
        {
          opacity: 0,
          yPercent: -100,
          xPercent: 100,
          scale: 0,
        },
        "<-.25"
      )
      .from(
        ".copy-rights",
        {
          duration: 0.35,
          yPercent: 100,
          opacity: 0,
        },
        "-=.4"
      );
  });

  return (
    <>
      <footer className="xl:mx-22.5 lg:mx-10 mx-5 flex items-center justify-between gap-12.5 flex-col lg:flex-row ">
        <div
          className="links-card relative min-h-[460px] w-full rounded-[40px] lg:rounded-[50px]  bg-white space-y-14 opacity-35"
          style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        >
          <div className=" px-8 py-12 md:px-10 md:pt-10 md:pb-16">
            <p className="links-title text-[40px] font-bold mb-10 overflow-hidden">
              Solus
            </p>

            <div className=" flex justify-between flex-wrap gap-12 text-nowrap text-lg leading-tight mb-14">
              <ul className=" space-y-5">
                <li>
                  <a href="#">About</a>
                </li>

                <li>
                  <a href="#">Services</a>
                </li>

                <li>
                  <a href="#">Therapists</a>
                </li>

                <li>
                  <a href="#">Resources</a>
                </li>

                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>

              <ul className=" space-y-5">
                <li>
                  <a href="#">Instagram</a>
                </li>

                <li>
                  <a href="#">Facebook</a>
                </li>

                <li>
                  <a href="#">YouTube</a>
                </li>

                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>

              <ul className=" space-y-5">
                <li>
                  <a href="#">Terms of use</a>
                </li>

                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <p className="copy-rights text-[#B8B8B8] text-lg overflow-hidden">
              © [2035] Solus. All rights reserved.
            </p>
          </div>
        </div>

        <div
          className="find-support-card relative  min-h-[460px] w-full rounded-[40px] lg:rounded-[50px]   bg-dark-green text-white font-bold text-[44px] overflow-hidden opacity-35"
          style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        >
          <div className="  px-8 py-12 md:px-10 md:pt-15 md:pb-16">
            <img
              src="/footer-section-img.svg"
              className="footer-section-img absolute right-[-1px] top-9 w-[36%] "
            />

            <p className="find-support-card-title leading-tight mb-12.5">
              Find <br /> Support, <br />
              Guidance,
              <br /> and Balance.
            </p>

            <Button className=" scale-0 relative z-[1] text-dark-green  bg-white w-full p-0 h-13.5 ">
              Find Support now
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}
