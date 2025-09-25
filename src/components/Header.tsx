import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  return (
    <header className=" relative xl:px-22.5 lg:px-10 px-5  flex items-center justify-between gap-5 mb-10 md:mb-7.5">
      <FaBars className=" md:hidden flex text-2xl" />
      <ul className=" hidden md:flex items-center lg:gap-17.5 gap-10 text-lg">
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

      <ul className="hidden md:flex items-center lg:gap-17.5 gap-10 text-lg">
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
