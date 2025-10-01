import { scroll } from "../lib/utils";

export default function Logo() {
  return (
    <h1
      className="logo cursor-pointer  scale-0 absolute md:relative max-md:left-1/2  max-md:-translate-x-1/2 font-Bricolage md:text-[50px] text-[40px] font-bold flex-1 text-center"
      onClick={() => scroll({ to: "0" })}
    >
      Solus
    </h1>
  );
}
