import React from "react";
import {
  HiCodeBracketSquare,
  HiCommandLine,
  HiRocketLaunch,
} from "react-icons/hi2";

const Services = () => {
  return (
    <div id="services" className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <HiCodeBracketSquare className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
            Process of creating the user-facing parts of a website or web application. It focuses on the visual aspects and interactivity that users directly interact with in their browsers.
            </p>
          </div>
        </div>

        <div>
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <HiRocketLaunch className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
            Is the server-side of web development. It focuses on how the website or application works behind the scenes to process data, handle user requests, and ensure smooth communication between the database, server,
            </p>
          </div>
        </div>

        <div>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <HiCommandLine className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Fullstack
            </h1>
            <p className="text-[13px] text-[#d3d2d2] font-normal">
            Refers to the practice of working on both the front-end (client-side) and back-end (server-side) of a web application. A full-stack developer has the skills and knowledge to build an entire web application, from designing the user interface to managing the server, database, and APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
