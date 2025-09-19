import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
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
    // Reset form fields
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
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-600 relative inline-block mb-8">
          Contact
          <span className="block w-20 h-1 bg-[#0563bb] mx-auto mt-3 rounded-full"></span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-10 text-gray-600">
          {[
            { icon: <MapPin size={26} />, title: "Address", text: "A108 Adam Street, New York, NY 535022" },
            { icon: <Phone size={26} />, title: "Call Us", text: "+1 5589 55488 55" },
            { icon: <Mail size={26} />, title: "Email Us", text: "info@example.com" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-blue-100 text-[#0563bb] flex items-center justify-center rounded-full transition duration-300 hover:bg-[#0563bb] hover:text-white shadow-md">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-600 text-lg">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          className="max-w-3xl mx-auto space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              custom={1}
              variants={formVariants}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0563bb]"
              required
            />
            <motion.input
              custom={2}
              variants={formVariants}
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0563bb]"
              required
            />
          </div>

          <motion.input
            custom={3}
            variants={formVariants}
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0563bb]"
            required
          />

          <motion.textarea
            custom={4}
            variants={formVariants}
            rows="6"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0563bb]"
            required
          ></motion.textarea>

          <motion.div custom={5} variants={formVariants} className="text-center">
            <button
              type="submit"
              className="bg-[#0563bb] text-white px-10 py-4 rounded-full font-semibold shadow-md hover:bg-[#0563bbce] transition"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
