import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Courses from './Components/Courses';

function App() {
  return (
    /* Updated background to a subtle radial gradient. 
       This makes the "backdrop-blur" in your components 
       look much deeper and more premium.
    */
    <div className="bg-[#171d32] bg-gradient-to-b from-[#171d32] via-[#0c0e19] to-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      
      {/* Adding vertical spacing (gap) between sections 
          if they feel too cramped 
      */}
      <div className="flex flex-col">
        <Home />
        <About />
        <Education />
        <Courses />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;