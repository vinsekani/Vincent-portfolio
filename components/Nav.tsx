import React from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] top-0 fixed z-[10000] h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
        <Link href="#home">
          WEB
          <span className="text-yellow-300">DEV</span>
          </Link>
        </h1>

        <Link href="#home">
          <div className="nav-link">HOME</div>
        </Link>
        <Link href="#services">
          <div className="nav-link">SERVICES</div>
        </Link>
        <Link href="#about">
          <div className="nav-link">ABOUT</div>
        </Link>
        <Link href="#projects">
          <div className="nav-link">PROJECTS</div>
        </Link>
        <Link href="#blog">
          <div className="nav-link">BLOG</div>
        </Link>
        <Link href="#footer">
          <div className="nav-link">CONTACT</div>
        </Link>
        <div onClick={openNav}>
          <FaBars className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
