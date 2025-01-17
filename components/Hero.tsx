import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { HiArrowDownTray } from "react-icons/hi2";
import { BiPlayCircle } from "react-icons/bi";
const Hero = () => {
  return (
    <div id="home" className="h-[88vh] bg-[#121212] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md-text-[50px] text-white font-bold">
            HELLO I'M <span className="text-yellow-400">VINCENT</span>
          </h1>

          <p className="mt-[1.5em] text-[20px] text-[#ffffff92]">
            I'm a FullStack Developer with a strong passion for creating
            meaningful technology. Whether it's designing intuitive user
            interfaces or crafting powerful back-end systems, I strive to
            deliver high-quality solutions that leave a lasting impact.
          </p>
<TextEffect/>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p>Download Cv</p>
              <HiArrowDownTray className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>

            <button className="flex items-center space-x-2">
              <BiPlayCircle className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
              <p className="text-[20px] font-semibold text-white">
                Watch Video
              </p>
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/vin.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
