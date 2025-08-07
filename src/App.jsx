// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans scroll-smooth bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
