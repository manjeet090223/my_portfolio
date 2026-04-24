import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  const { personal, about } = portfolioData;

  return (
    <motion.div
      className="max-w-6xl mx-auto py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-600 text-center">
          About Me
          <span className="block w-16 h-1 bg-[#0563bb] mx-auto mt-3 rounded-full"></span>
        </h2>
      </div>

      <p className="mb-12 text-gray-600 text-lg md:text-xl leading-relaxed">
        {personal.bio}
      </p>
      
      <h3 className="text-3xl font-semibold mb-6 text-gray-600">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {about.skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <p className="text-gray-700 font-medium">{skill.name}</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
                className="h-4 rounded-full"
                style={{ backgroundColor: "#0563bb" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
