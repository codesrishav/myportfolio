import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Food Delivery App (MERN)",
    description:
      "A full-stack food delivery application using the MERN stack (MongoDB, Express, React, Node.js). Includes authentication, cart system, order placement, and admin panel for managing menu and users.",
    images: ["/projects/food1.png", "/projects/food2.png"],
    github: "https://github.com/codesrishav",
    live: "https://food-express-gilt.vercel.app/",
  },
  {
    title: "Weather Forecast App",
    description:
      "A responsive weather forecasting app built with React and Tailwind CSS. Features current conditions, 7-day forecast, hourly data, temperature toggle, and animated weather backgrounds.",
    images: ["/projects/weather1.png", "/projects/weather2.png"],
    github: "https://github.com/codesrishav/weatherforecast",
    live: "https://weather-forecast-eight-gules.vercel.app/",
  },
  {
    title: "Online Code Editor",
    description:
      "A real-time online code editor built with HTML, CSS, and JavaScript. Features live preview, syntax highlighting, and download support. Great for prototyping and learning frontend basics.",
    images: ["/projects/code1.png", "/projects/code2.png"],
    github: "https://github.com/yourproject",
    live: "https://code-editor-frontend-rhf0.onrender.com",
  },
  {
    title: "Excel Analytics Platform",
    description:
      "A web-based dashboard for uploading, analyzing, and visualizing Excel files. Features include real-time chart previews, upload history, and a clean UI. Built with React, Chart.js, and Tailwind CSS.",
    images: ["/projects/excel1.png", "/projects/excel2.png"],
    github: "https://github.com/your-excel-platform",
    live: "https://excelplatform.live",
  },
];

const Projects = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    Array(projects.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prevIndexes) =>
        prevIndexes.map((idx, i) => {
          const total = projects[i].images.length;
          return (idx + 1) % total;
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-orange-500">Projects</span>
      </h2>

      <div className="space-y-16">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Description Block */}
              <div className="w-full md:w-1/2 z-10">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-200">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-orange-400 text-xl hover:text-orange-500"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-orange-400 text-xl hover:text-orange-500"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              {/* Image Block */}
              <div className="w-full md:w-1/2 relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                  style={{
                    backgroundImage: `url(${project.images[currentIndexes[index]]})`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
