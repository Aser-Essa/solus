import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";
import gsap from "gsap";
import { scroll } from "../lib/utils";
import { useMediaQuery } from "react-responsive";
import MobileNavList from "./MobileNavList";

export default function Header() {
  const headerRef = useRef<HTMLHeadingElement>(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const topOffset = isMobile ? 20 : 40;

  useEffect(() => {
    const header = headerRef.current;

    if (!header) return;
    let yOffset = 0;
    let lastScroll = 0;

    function handleScroll() {
      const currentScroll = window.scrollY;
      const diff = currentScroll - lastScroll;
      yOffset += diff;
      const maxHide = header?.offsetHeight || 0;
      yOffset = Math.min(Math.max(yOffset, 0), maxHide);
      gsap.to(header, {
        y: -yOffset,
        duration: 0.2,
        ease: "power1.inOut",
      });

      if (currentScroll > 0 && currentScroll < 50) {
        gsap.to(header, {
          top: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      if (currentScroll === 0) {
        gsap.to(header, {
          top: topOffset,
          duration: 0.4,
        });
      }

      lastScroll = currentScroll;
    }

    const startScroll = window.scrollY;
    if (startScroll > 0) {
      gsap.set(header, { top: 0 });
    } else {
      gsap.set(header, { top: topOffset });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".left-links li", {
      duration: 0.6,
      yPercent: 250,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
    })
      .from(
        ".right-links li",
        {
          duration: 0.6,
          yPercent: 250,
          opacity: 0,
          stagger: { each: 0.1, from: "end" },
          ease: "power2.out",
        },
        "<"
      )
      .to(".logo", {
        duration: 0.4,
        scale: 1,
        ease: "back.out(1.5)",
      });
  });

  return (
    <header
      ref={headerRef}
      className="fixed left-0 max-w-screen w-full backdrop-blur-[10px] z-50 bg-[#f7f6f471] h-[91px] 
      xl:px-22.5 lg:px-10 px-5 flex items-center justify-between gap-5"
    >
      <MobileNavList />

      <ul className="left-links hidden md:flex items-center lg:gap-17.5 gap-10 text-lg overflow-hidden">
        <li onClick={() => scroll({ to: "0" })} className=" cursor-pointer">
          Home
        </li>
        <li
          onClick={() => scroll({ to: "#about", offset: 20 })}
          className=" cursor-pointer"
        >
          About
        </li>
        <li
          onClick={() => scroll({ to: "#services", offset: 20 })}
          className=" cursor-pointer"
        >
          Services
        </li>
      </ul>

      <Logo />

      <ul className="right-links hidden md:flex items-center lg:gap-17.5 gap-10 text-lg overflow-hidden">
        <li
          onClick={() => scroll({ to: "#therapists", offset: 20 })}
          className=" cursor-pointer"
        >
          Therapists
        </li>
        <li
          onClick={() => scroll({ to: "#resources", offset: 20 })}
          className=" cursor-pointer"
        >
          Resources
        </li>
        <li
          onClick={() => scroll({ to: "#contactUs", offset: 20 })}
          className=" cursor-pointer"
        >
          Contact
        </li>
      </ul>

      <FaBars className="md:hidden flex text-2xl opacity-0" />
    </header>
  );
}
