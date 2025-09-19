import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-md"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-md"
          rows="5"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
