import { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub, FaCode } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { personal, social } = portfolioData;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 text-center py-10 relative">
      <h2 className="text-2xl font-bold text-gray-600">{personal.name}</h2>
      <p className="text-gray-600 italic mt-2 max-w-xl mx-auto">
        {personal.tagline}
      </p>

      <div className="flex justify-center space-x-4 mt-6">
        <a
          href={social.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#0563bb] border-[#0563bb] text-white hover:bg-[#0563bbce] hover:text-white transition"
        >
          <FaCode size={18} />
        </a>
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#0563bb] border-[#0563bb] text-white hover:bg-[#0563bbce] hover:text-white transition"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#0563bb] border-[#0563bb] text-white hover:bg-[#0563bbce] hover:text-white transition"
        >
          <FaGithub size={18} />
        </a>
      </div>

      <hr className="my-6 w-3/4 mx-auto border-gray-300" />
      <p className="text-gray-500 text-sm">
        Copyright <strong className="text-gray-600">{personal.name}</strong> All Rights Reserved
      </p>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-[#0563bb] text-white rounded-full shadow-lg hover:bg-[#0563bbce] transition"
        >
          ↑
        </button>
      )}
    </footer>
  );
}
