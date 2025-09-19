import { useState, useEffect } from "react";
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Sidebar = () => {
  const navItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "resume", label: "Resume", icon: <FaFileAlt /> },
    { id: "portfolio", label: "Portfolio", icon: <FaBriefcase /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop - 80;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial active
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hoverColor = "#0563bb"; // your custom hex color

  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 left-4 flex flex-col items-center space-y-6 z-50">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.id}
          smooth={true}
          duration={500}
          offset={-70}
          className="relative group flex items-center justify-center cursor-pointer"
        >
          <div
  className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 
    ${active === item.id ? "bg-[#0563bb] text-white" : "bg-gray-200 text-gray-700"} 
    group-hover:bg-[#0563bb] group-hover:text-white`}
>
  {item.icon}
</div>


<span
  className="absolute left-0 flex items-center h-12 w-12 px-3 rounded-full 
             bg-gray-200 text-gray-700 opacity-0 group-hover:opacity-100 
             group-hover:w-25 group-hover:bg-[#0563bb] group-hover:text-white
             transition-all duration-300 whitespace-nowrap"
>
  {item.label}
</span>


        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
