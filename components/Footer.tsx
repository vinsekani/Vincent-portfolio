import React from "react";
import { HiMap } from "react-icons/hi";
import { HiDevicePhoneMobile, HiEnvelope } from "react-icons/hi2";
import Link from "next/link";


const Footer = () => {
  return (
    <div id="footer" className="pt-[8rem] pb-[4rem] bg-[#02050A]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-col-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <HiMap className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-black"/>
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Address</h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
               Nairobi, Kibra, Mashimomi
            </p>
          </div>
        </div>
        
        
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <HiDevicePhoneMobile className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-black"/>
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Phone no</h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
               +254701665262 <br /> +254783447490
            </p>
          </div>
        </div>


        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
          <Link href="/contactpage"><HiEnvelope className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-black"/></Link>
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Send Email</h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
               vinsekani@gmail.com <br />
               vinnyvicky70@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grig grid-cols-1 md:grid-cols-2 items-center justify-between">
<div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
Cyber Sekani 2024 | All Rights Reserved
</div>
<div className="flex items-center space-x-10">
<p className="text-[16px] text-white opacity-20">Terms & Conditions</p>
<p className="text-[16px] text-white opacity-20">Privacy Policy</p>
<p className="text-[16px] text-white opacity-20">Sitemap</p>
</div>
      </div>
    </div>
  );
};

export default Footer;
