import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Button from "../components/Button";
import { useMediaQuery } from "react-responsive";

export default function ContactUs() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".contactUs-section .section-title", {
      type: "chars",
    });

    const detailsTitle = SplitText.create(
      ".contactUs-section .details-form-title ",
      {
        type: "chars",
      }
    );

    const sectionDescription = SplitText.create(
      ".contactUs-section .section-description",
      {
        type: "words, lines",
        linesClass: "line",
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 80%",
        end: "110% 100%",
        trigger: ".contactUs-section",
        scrub: isMobile ? false : 2.5,
      },
    });

    tl.from(".contactUs-section .section-eyebrow", {
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
      .to(
        ".details-form-container",
        {
          duration: 1,
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power1.inOut",
        },
        "+=.4"
      )
      .from(detailsTitle.chars, {
        duration: 0.45,
        yPercent: 300,
        stagger: 0.01,
        ease: "power2.out",
      })
      .from(".details", {
        duration: 1,
        xPercent: 100,
        stagger: 0.2,
        opacity: 0,
      })
      .to(
        ".contact-form",
        {
          duration: 0.8,
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power1.inOut",
        },
        "<"
      )
      .from(".input-row", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.4,
      })
      .to(".contact-form button", {
        duration: 0.8,
        scale: 1,
        ease: "back.out(1)",
      })
      .from(
        ".icon",
        {
          duration: 0.6,
          scale: 0,
          stagger: 0.15,
          ease: "back.out(2)",
        },
        "-=2"
      )
      .from(".respond-time", {
        yPercent: 200,
        opacity: 0,
      });
  });

  return (
    <>
      <section className="contactUs-section xl:xl:px-22.5 lg:px-10 px-5 mb-20 md:mb-30 ">
        <div className="space-y-5 text-center mb-20">
          <div className="overflow-hidden w-fit mx-auto">
            <p className="section-eyebrow text-sm font-medium overflow-hidden">
              Get in Touch
            </p>
          </div>

          <p className="section-title font-bold  text-[clamp(34px,5vw,52px)] leading-tight overflow-hidden">
            We’re Here to <br /> Support You
          </p>
          <p className="section-description text-[clamp(16px,2.3vw,22px)] overflow-hidden">
            Whether you have questions, need help getting{" "}
            <br className=" hidden md:flex" /> started, or want to learn more —
            reach out anytime.
          </p>
        </div>

        <div
          className="details-form-container opacity-35 bg-white rounded-[50px] lg:rounded-[60px] px-8 py-12 md:p-17.5 min-h-156.75 flex flex-wrap flex-col md:flex-row justify-between gap-15 md:gap-19.5"
          style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        >
          <div className=" flex-1 flex flex-col gap-12 md:gap-14 justify-between">
            <div>
              <p className="details-form-title text-[30px] font-semibold mb-8 md:mb-11.5 overflow-hidden">
                Contact Details:
              </p>
              <div className=" space-y-3.75 mb-6 md:mb-10 overflow-hidden">
                <p className="details">
                  <span className=" font-bold">Email:</span> support@solus.com
                </p>

                <p className="details">
                  <span className=" font-bold">Phone:</span> +1 (123) 456-7890
                </p>

                <p className="details">
                  <span className=" font-bold">Address:</span> 123 Wellness Way,
                  Calm City, CA 90210
                </p>
              </div>

              <div className=" flex items-center gap-5">
                <FaLinkedin className="  icon text-[28px]" />
                <FaFacebook className="  icon text-[28px]" />
                <FaInstagram className=" icon  text-[28px]" />
                <FaWhatsapp className="  icon text-[28px]" />
              </div>
            </div>
            <p className="respond-time text-xl overflow-hidden">
              We typically respond within 12 hours.
            </p>
          </div>

          <div className=" flex-1 min-w-auto sm:min-w-[350px]">
            <p className="details-form-title text-[30px] font-semibold mb-9 md:mb-12.5 overflow-hidden">
              Send Us a Message
            </p>
            <form
              className="contact-form bg-[#FDF7F1] rounded-[40px] md:rounded-[50px] w-full min-h-100 px-8 py-12 md:px-12.5 md:pt-11.25 md:pb-15 space-y-13.5"
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            >
              <div className="input-row flex flex-col gap-1.25 ">
                <label className="text-xl">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className=" placeholder:text-xl placeholder:text-[#00373e33] border-b border-dark-green pb-1.25 w-full outline-none "
                />
              </div>

              <div className="input-row flex flex-col gap-1.25 ">
                <label className="text-xl">Message</label>
                <input
                  type="text"
                  placeholder="Message"
                  className=" placeholder:text-xl placeholder:text-[#00373e33] border-b border-dark-green pb-1.25 w-full outline-none "
                />
              </div>

              <Button className="form-btn bg-dark-green w-full h-13.5 p-0 scale-0">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
