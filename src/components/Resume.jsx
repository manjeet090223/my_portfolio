import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer",
    company: "ABC Company",
    year: "2022 - Present",
    desc: "Worked on building responsive websites and interactive UIs.",
  },
  {
    title: "Intern",
    company: "XYZ Tech",
    year: "2021 - 2022",
    desc: "Assisted in developing e-commerce features with React.",
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "Your University",
    year: "2018 - 2022",
  },
  {
    degree: "High School",
    school: "Your School",
    year: "2016 - 2018",
  },
];

const Resume = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6">Resume</h2>

      <h3 className="text-2xl font-semibold mb-4">Experience</h3>
      <div className="relative border-l-2 border-blue-500 ml-6 mb-12">
        {experiences.map((exp, i) => (
          <div key={i} className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full"></span>
            <h4 className="font-bold">{exp.title}</h4>
            <p className="text-sm text-gray-600">
              {exp.company} | {exp.year}
            </p>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-4">Education</h3>
      <div className="relative border-l-2 border-blue-500 ml-6">
        {education.map((edu, i) => (
          <div key={i} className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full"></span>
            <h4 className="font-bold">{edu.degree}</h4>
            <p className="text-sm text-gray-600">
              {edu.school} | {edu.year}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Resume;
