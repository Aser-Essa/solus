import gsap from "gsap";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { cn, scroll } from "../lib/utils";

export default function MobileNavList() {
  const [isOpen, setIsopen] = useState(false);

  function toggleMenu() {
    setIsopen((prev) => !prev);
  }

  useEffect(() => {
    if (isOpen) {
      gsap.to(".mobile-nav-list-container", {
        duration: 0.3,
        width: "85%",
        opacity: 1,
        ease: "power1.out",
      });

      gsap.to(".overlay", {
        duration: 0.3,
        background: "#00000088",
        opacity: 1,
        zIndex: 1000,
        ease: "power1.out",
        display: "block",
      });

      gsap.to(".mobile-nav-list", {
        duration: 0.4,
        opacity: 1,
      });
    } else {
      gsap.to(".mobile-nav-list-container", {
        duration: 0.3,
        width: 0,
        ease: "power1.in",
      });

      gsap.to(".overlay", {
        duration: 0.4,
        delay: 0.15,
        background: "#00000088",
        opacity: 0,
        zIndex: 0,
        display: "none",
      });

      gsap.to(".mobile-nav-list", {
        duration: 0.4,
        opacity: 0,
      });
    }
  }, [isOpen]);

  return (
    <>
      <FaBars
        className="md:hidden flex text-2xl cursor-pointer"
        onClick={toggleMenu}
      />

      {createPortal(
        <div className=" block md:hidden max-w-screen">
          <div
            className={cn(
              " overlay fixed  top-0 opacity-0   w-screen h-screen"
            )}
            onClick={toggleMenu}
          ></div>

          <div
            className={cn(
              "mobile-nav-list-container overflow-hidden text-lg w-0 max-w-[85%] font-medium  fixed z-[10000] top-0 left-0  bg-[#F7F6F4] rounded-r-[20px] h-dvh"
            )}
          >
            <div className="mobile-nav-list p-8 flex flex-col gap-8 opacity-0">
              <div className=" flex items-center justify-between">
                <p
                  className="logo cursor-pointer relative font-Bricolage  text-[40px] font-bold"
                  onClick={() => {
                    scroll({ to: "0" });
                    toggleMenu();
                  }}
                >
                  Solus
                </p>

                <IoCloseOutline
                  className=" text-3xl cursor-pointer"
                  onClick={() => toggleMenu()}
                />
              </div>
              <ul className="flex flex-col gap-6 ">
                <li
                  onClick={() => {
                    scroll({ to: "0" });
                    toggleMenu();
                  }}
                  className="cursor-pointer"
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    scroll({ to: "#about", offset: 20 });
                    toggleMenu();
                  }}
                  className="cursor-pointer"
                >
                  About
                </li>
                <li
                  onClick={() => {
                    scroll({ to: "#services", offset: 20 });
                    toggleMenu();
                  }}
                  className="cursor-pointer"
                >
                  Services
                </li>
                <li
                  onClick={() => {
                    scroll({ to: "#therapists", offset: 20 });
                    toggleMenu();
                  }}
                  className="cursor-pointer"
                >
                  Therapists
                </li>
                <li
                  onClick={() => {
                    scroll({ to: "#resources", offset: 20 });
                    toggleMenu();
                  }}
                  className="cursor-pointer"
                >
                  Resources
                </li>
                <li
                  onClick={() => {
                    scroll({ to: "#contactUs", offset: 20 });
                    toggleMenu();
                  }}
                  className="cursor-pointer"
                >
                  Contact
                </li>
              </ul>
            </div>

            <img
              src="/community-section-img.svg"
              className=" absolute bottom-0 right-0 opacity-90"
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
