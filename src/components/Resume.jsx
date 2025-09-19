import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "Your University",
    year: "2018 - 2022",
    desc: "Specialized in full-stack development and modern web technologies.",
  },
  {
    degree: "High School",
    school: "Your School",
    year: "2016 - 2018",
    desc: "Focused on science and mathematics, built strong problem-solving skills.",
  },
];

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="max-w-5xl mx-auto py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
     <motion.h2
  className="text-4xl md:text-6xl font-bold text-center text-gray-600"
  initial={{ y: -30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Resume
  <span className="block w-16 h-1 bg-[#0563bb] mx-auto mt-3 rounded-full"></span>
</motion.h2>

{/* extra spacing after heading */}
<div className="mb-16"></div>


      {/* Summary */}
      <motion.div
        className="bg-gray-100 p-6 rounded-xl shadow-md mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-2xl font-semibold mb-3 text-gray-600">
          Summary
          
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Aspiring and passionate web developer with hands-on experience in
          modern front-end technologies. Skilled in building elegant, responsive
          user interfaces and eager to contribute to impactful projects. Always
          excited to learn, adapt, and bring ideas to life through code.
        </p>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold mb-6 text-gray-600">
          Education
        </h3>
        <div className="relative border-l-2 border-[#0563bb] ml-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="mb-10 ml-6 bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              {/* Timeline dot */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#0563bb] rounded-full ring-4 ring-white"></span>
              
              <h4 className="text-xl font-bold text-gray-600">{edu.degree}</h4>
              <p className="text-sm text-gray-600 mb-2">
                {edu.school} | {edu.year}
              </p>
              <p className="text-gray-700">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Resume;
