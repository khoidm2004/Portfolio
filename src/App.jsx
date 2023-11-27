import { motion, useScroll } from "framer-motion";
import Headroom from "react-headroom";
import "./App.css";

import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import NavBar from "./Component/NavBar/NavBar";
import Projects from "./Component/Projects/Projects";
import Resume from "./Component/Resume/Resume";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div>
        <Headroom downTolerance={100}>
          <NavBar />
        </Headroom>
        <motion.div
          className="progress_bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
