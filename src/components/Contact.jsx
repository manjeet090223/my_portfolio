import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! ");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className="max-w-6xl mx-auto py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-600 relative inline-block mb-8">
          Contact
          <span className="block w-20 h-1 bg-[#0563bb] mx-auto mt-3 rounded-full"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600">
        {[
          { icon: <MapPin size={26} />, title: "Address", text: personal.address },
          { icon: <Phone size={26} />, title: "Call Us", text: personal.phone },
          { icon: <Mail size={26} />, title: "Email Us", text: personal.email },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center gap-4 p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-blue-50 text-[#0563bb] flex items-center justify-center rounded-full transition duration-300 hover:bg-[#0563bb] hover:text-white shadow-sm">
              {item.icon}
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">{item.title}</h4>
              <p className="text-gray-600">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Contact;
