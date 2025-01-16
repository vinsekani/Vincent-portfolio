import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem title="React Developer" year="2024-2025" description="I specialize in building modern, dynamic, and user-friendly interfaces using React. With expertise in component-based architecture, state management (e.g., Redux), and optimizing performance, I craft seamless web experiences tailored to user needs."/>
          <SkillsItem title="Node Js Developer" year="2024-2025" description="I focus on creating robust and efficient back-end solutions using Node.js. From RESTful APIs to real-time applications, I bring scalability, security, and speed to server-side development with frameworks like Express.js."/>
          <SkillsLanguage
            skill1="html"
            skill2="css"
            skill3="javascript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>

        <div>
          <SkillsItem title="Next Js Developer" year="2024-2025" description="Leveraging the power of Next.js, I build scalable, server-side rendered, and static websites that prioritize performance and SEO. My skills include dynamic routing, API integration, and ensuring fast, responsive web applications."/>
          <SkillsItem title="MERN Stack Developer" year="2024-2025" description="Combining front-end expertise with back-end proficiency, I deliver end-to-end solutions for complex applications. My full-stack development includes creating responsive user interfaces, efficient server-side architectures, and seamless integration of technologies."/>
          <SkillsLanguage
            skill1="react"
            skill2="Next Js"
            skill3="Typescript"
            level1="w-[81%]"
            level2="w-[78%]"
            level3="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
