import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ZoomIn, X } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Portfolio = () => {
  const { portfolio } = portfolioData;
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <motion.section
      id="portfolio"
      className="max-w-6xl mx-auto py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-600 mb-6">
        Projects
        <span className="block w-20 h-1 bg-[#0563bb] mx-auto mt-4 rounded-full"></span>
      </h2>

      {/* Grid */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-24">
        {portfolio.projects.map((project, i) => (
          <motion.div
            key={i}
            className="relative group overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white px-4">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.desc}</p>

              <div className="flex gap-4">
                {/* Zoom Image */}
                <button
                  onClick={() => setSelectedImg(project.img)}
                  className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40 transition"
                >
                  <ZoomIn size={20} />
                </button>

                {/* External Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40 transition"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="relative max-w-3xl w-full px-4">
            <img
              src={selectedImg}
              alt="Zoomed"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Portfolio;
