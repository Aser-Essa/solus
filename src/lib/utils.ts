import { clsx, type ClassValue } from "clsx";
import gsap from "gsap";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type scrollToParams = {
  to: string;
  offset?: number;
};

export function scroll({ to, offset }: scrollToParams) {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: to,
      offsetY: offset,
    },
    ease: "power2.inOut",
  });
}
