import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="mb-2 flex justify-center space-x-4">
        <a href="https://github.com/codesrishav" target="_blank" rel="noreferrer" className="hover:text-orange-400">
          <FaGithub className="text-xl" />
        </a>
        <a href="https://www.linkedin.com/in/rishavkumar5793/" target="_blank" rel="noreferrer" className="hover:text-orange-400">
          <FaLinkedin className="text-xl" />
        </a>
        <a href="https://x.com/RishavKuma79182" target="_blank" rel="noreferrer" className="hover:text-orange-400">
          <FaTwitter className="text-xl" />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Rishav Kumar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
