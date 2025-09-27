import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";
import gsap from "gsap";

export default function Header() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".left-links li", {
      duration: 0.4,
      yPercent: 100,
      opacity: 0,
      stagger: 0.12,
      ease: "power2.out",
    })
      .from(
        ".right-links li",
        {
          duration: 0.4,
          yPercent: 100,
          opacity: 0,
          stagger: 0.12,
          reversed: true,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        ".logo",
        {
          duration: 0.3,
          scale: 1.1,
        },
        "-=0.15"
      )
      .to(".logo", {
        duration: 0.25,
        scale: 1,
      });
  });

  return (
    <header className=" relative xl:px-22.5 lg:px-10 px-5  flex items-center justify-between gap-5 mb-10 md:mb-7.5">
      <FaBars className=" md:hidden flex text-2xl" />
      <ul className="left-links hidden md:flex items-center lg:gap-17.5 gap-10 text-lg overflow-hidden">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Services</a>
        </li>
      </ul>

      <Logo />

      <ul className=" right-links hidden md:flex items-center lg:gap-17.5 gap-10 text-lg overflow-hidden">
        <li>
          <a>Therapists</a>
        </li>
        <li>
          <a>Resources</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </header>
  );
}
