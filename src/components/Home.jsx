import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../assets/my-photo.jpeg";

const Home = () => {
  return (
    <section className="relative flex justify-between items-center min-h-screen w-full">
  {/* Left Content */}
  <motion.div
    className="flex-1 max-w-xl space-y-8 z-10 px-8 md:px-20"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
      Hi, I'm <span className="text-yellow-300">Manjeet</span>
    </h1>
    <p className="text-2xl md:text-3xl text-gray-700 font-medium h-12">
      <Typewriter
        words={["A Passionate Web Developer"]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </p>
    <button className="mt-6 px-8 py-4 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300">
      View Portfolio
    </button>
  </motion.div>

  {/* Right Image */}
  <motion.div
    className="flex-1 h-screen flex justify-end"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0.6] }}
    transition={{ duration: 2 }}
  >
    <img
      src={myPhoto}
      alt="Manjeet"
      className="h-full max-h-screen md:w-[600px] object-cover shadow-2xl"
    />
  </motion.div>
</section>

  );
};

export default Home;
