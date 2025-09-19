import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-16 w-full">
<section
  id="home"
  className="h-screen flex flex-col items-center justify-center text-center text-gray-800 bg-[url('/hero-bg.jpg')] bg-cover bg-center relative"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/70"></div>

  {/* Content */}
 
          <Home />
        </section>
        <section id="about" className="bg-[#f5f8fd]">
          <About />
        </section>
        <section id="resume" className="bg-white">
          <Resume />
        </section>
        <section id="portfolio" className="bg-[#f5f8fd]">
          <Portfolio />
        </section>
        <section id="contact" className="bg-white">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
