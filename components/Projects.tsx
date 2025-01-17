
import React from "react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/project1.png",
      title: "Project 1",
      codeUrl: "https://github.com/vinsekani/saferentals.git",
      demoUrl: "https://www.canva.com/design/DAGZAUtC12E/dg4xppc23qo2xVacgKcI3g/edit?utm_content=DAGZAUtC12E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      id: 2,
      image: "/project2.png",
      title: "Project 2",
      codeUrl: "https://github.com/vinsekani/FamCare.git",
      demoUrl: "https://vinsekani.github.io/FamCare/",
    },
    {
      id: 3,
      image: "/project3.png",
      title: "Project 3",
      codeUrl: "https://github.com/vinsekani/clozzet.git",
      demoUrl: "https://live-demo3.com",
    },
    {
      id: 4,
      image: "/project4.png",
      title: "Project 4",
      codeUrl: "https://github.com/vinsekani/Medical-portfolio.git",
      demoUrl: "https://vinsekani.github.io/Medical-portfolio/",
    },
    {
      id: 5,
      image: "/project5.png",
      title: "Project 5",
      codeUrl: "https://github.com/vinsekani/pizzaara.git",
      demoUrl: "https://vinsekani.github.io/pizzaara/",
    },
    {
      id: 6,
      image: "/project6.png",
      title: "Project 6",
      codeUrl: "https://github.com/Edwinkipsang/Uptown-dishes.git",
      demoUrl: "https://edwinkipsang.github.io/Uptown-dishes/",
    },
  ];

  return (
    <div id="projects" className="bg-[#02050a] pt-16 pb-8">
      <h1 className="text-center text-5xl font-extrabold text-white">
        Pro<span className="text-yellow-400">jects</span>
      </h1>
      <div className="w-[90%] pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            {/* Image */}
            <div className="relative w-full h-56 md:h-72 lg:h-80">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                className="object-cover"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
              <h2 className="text-white text-2xl font-bold mb-2">
                {project.title}
              </h2>
              <div className="flex gap-4">
                <a
                  href={project.codeUrl}
                  target={project.codeUrl}
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-200"
                >
                  View Code
                </a>
                <a
                  href={project.demoUrl}
                  target={project.demoUrl}
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

