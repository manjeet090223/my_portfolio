import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "JavaScript", level: "80%" },
  { name: "React", level: "75%" },
  { name: "Node.js", level: "70%" },
  { name: "Python", level: "65%" },
  { name: "MySQL", level: "60%" },
];

const About = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
        About Me
      </h2>

      {/* About Me Text */}
      <p className="mb-12 text-gray-700 text-lg md:text-xl leading-relaxed">
        Hello, I’m <span className="font-semibold">Manjeet</span>, an aspiring Web Developer with a passion for designing and building elegant, efficient, and user-friendly web applications.  
        I enjoy transforming complex ideas into seamless digital experiences using <span className="font-medium">HTML, CSS, JavaScript, and React</span>.  
        Constantly exploring modern technologies such as <span className="font-medium">Node.js, Python, and MySQL</span>, I aim to craft scalable solutions that make an impact.  
        Driven by curiosity and creativity, I aspire to grow as a full-stack developer, delivering projects that are not only functional but also visually engaging.
      </p>

      {/* Skills Timeline */}
      <h3 className="text-3xl font-semibold mb-6 text-gray-800">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
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
