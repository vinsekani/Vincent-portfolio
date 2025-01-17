import React from "react";
import Image from "next/image";
import { HiChatBubbleLeftRight, HiUserCircle } from "react-icons/hi2";

const Blog = () => {
  return (
    <div id="blog" className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        MY
        <span className="text-yellow-400"> BLOG</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/blog1.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="bg-[#55e6a5] w-fit px-[1rem] py-[1rem] relative mt-[3rem] text-black font-semibold text-[17px] mx-auto">
              December 10,2024
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 ">
              <div className="flex items-center space-x-3">
                <HiUserCircle className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">By Sekani</p>
              </div>
              <div className="flex items-center space-x-3">
                <HiChatBubbleLeftRight className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Comments (12)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">Next js Fullstack Development</p>
          </div>
        </div>
        
        
        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/blog2.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="bg-[#55e6a5] w-fit px-[1rem] py-[1rem] relative mt-[3rem] text-black font-semibold text-[17px] mx-auto">
              December 17,2024
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 ">
              <div className="flex items-center space-x-3">
                <HiUserCircle className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">By Chris</p>
              </div>
              <div className="flex items-center space-x-3">
                <HiChatBubbleLeftRight className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Comments (7)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">React new features</p>
          </div>
        </div>
        
        
        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/blog3.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="bg-[#55e6a5] w-fit px-[1rem] py-[1rem] relative mt-[3rem] text-black font-semibold text-[17px] mx-auto">
              December 21,2024
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 ">
              <div className="flex items-center space-x-3">
                <HiUserCircle className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">By Usher</p>
              </div>
              <div className="flex items-center space-x-3">
                <HiChatBubbleLeftRight className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Comments (4)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">Next js new features</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
