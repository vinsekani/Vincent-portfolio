import React from "react";
import { GoX } from "react-icons/go";
import Link from "next/link";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        {/* Add onClick handler to each Link */}
        <Link href="#home" onClick={closeNav}>
          <div className="nav-link-mobile">HOME</div>
        </Link>
        <Link href="#services" onClick={closeNav}>
          <div className="nav-link-mobile">SERVICES</div>
        </Link>
        <Link href="#about" onClick={closeNav}>
          <div className="nav-link-mobile">ABOUT</div>
        </Link>
        <Link href="#projects" onClick={closeNav}>
          <div className="nav-link-mobile">PROJECTS</div>
        </Link>
        <Link href="#blog" onClick={closeNav}>
          <div className="nav-link-mobile">BLOG</div>
        </Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <GoX />
      </div>
    </div>
  );
};

export default MobileNav;

