import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Website",
    img: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "Portfolio Website",
    img: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "Blog App",
    img: "https://via.placeholder.com/400x250",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <h4 className="text-white text-lg font-bold">
                {project.title}
              </h4>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
