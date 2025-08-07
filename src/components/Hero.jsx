import React from "react";
import Typical from "react-typical";
import profileImg from "../assets/profile.jpg"; // Ensure this exists

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center pt-20 px-4 sm:px-8 md:px-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hello, I'm{" "}
          <span className="font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-pulse-gradient">
            Rishav Kumar
          </span>
        </h1>

        {/* Animated Role */}
        <Typical
          steps={[
            "Full Stack Developer", 3000,
            "MERN Stack Developer", 3000,
            "UI/UX Designer", 3000,
            "Web Developer", 3000,
          ]}
          loop={Infinity}
          wrapper="p"
          className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
        />

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
          I'm a web developer and here is my portfolio website. Here you'll learn about my journey as a web developer.
        </p>

        {/* CTA Buttons */}
        <div className="space-x-4 mt-4">
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-block px-6 py-2 border-2 border-orange-500 text-orange-500 dark:text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition"
          >
            Hire Me
          </a>
        </div>
      </div>
{/* Stylish Designer Photo Frame */}
<div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
  <div className="relative p-[6px] rounded-[1.5rem] bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-500 shadow-lg animate-float">
    <div className="w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-white dark:bg-gray-900 rounded-[1.3rem] overflow-hidden shadow-inner">
      <img
        src={profileImg}
        alt="Profile"
        className="w-full h-full object-cover rounded-[1.2rem] transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>
</div>

    </section>
  );
};

export default Hero;
