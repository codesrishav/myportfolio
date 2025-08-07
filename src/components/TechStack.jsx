import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-blue-400" />, name: "React" },
  { icon: <SiNextdotjs className="text-black dark:text-white" />, name: "Next.js" },
  { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind" },
  { icon: <FaNode className="text-green-500" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-600 dark:text-gray-300" />, name: "Express" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <FaGithub className="text-gray-800 dark:text-gray-200" />, name: "GitHub" },
];

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-20 px-4 sm:px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      {/* About Me Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="text-orange-500">Me</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          I'm a passionate full-stack web developer with a focus on building modern,
          responsive, and user-friendly applications. I enjoy turning complex
          problems into clean, functional code using technologies like React,
          Node.js, and MongoDB. Whether it's creating a sleek frontend UI or a
          powerful backend API, I love crafting meaningful digital experiences.
        </p>
      </div>

      {/* Tech Stack Section */}
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-orange-500">Tech Stack</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center hover:scale-110 transition"
          >
            <div className="text-4xl sm:text-5xl mb-2">{skill.icon}</div>
            <p className="text-sm sm:text-base font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
