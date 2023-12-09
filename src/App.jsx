import { motion, useScroll } from "framer-motion";
import Headroom from "react-headroom";
import React, { Suspense } from "react";

import "./App.css";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import NavBar from "./Component/NavBar/NavBar";
import Projects from "./Component/Projects/Projects";
import Resume from "./Component/Resume/Resume";

function App() {
  const { scrollYProgress } = useScroll();

  const Home1 = React.lazy(() => import("./Component/Home/Home"));
  const NavBar1 = React.lazy(() => import("./Component/NavBar/NavBar"));
  const About1 = React.lazy(() => import("./Component/About/About"));
  const Resume1 = React.lazy(() => import("./Component/Resume/Resume"));
  const Projects1 = React.lazy(() => import("./Component/Projects/Projects"));
  const Contact1 = React.lazy(() => import("./Component/Contact/Contact"));

  return (
    <>
      <div>
        <Suspense>
          <Headroom downTolerance={100}>
            <NavBar1 />
          </Headroom>
          <motion.div
            className="progress_bar"
            style={{ scaleX: scrollYProgress }}
          />
          <Home1 />
          <About1 />
          <Resume1 />
          <Projects1 />
          <Contact1 />
        </Suspense>
      </div>
    </>
  );
}

export default App;
