import "./Resume.css";

import {
  Python,
  HTML,
  CSS,
  Js,
  Ts,
  CPP,
  ReactLogo,
  Vite,
  Node,
  Selenium,
  SQLite,
  Git,
  Mocha,
  MySQL,
  Jest,
  Firebase,
  Azure,
  R_Pico,
} from "./index.js";

export default function Resume() {
  return (
    <>
      <div className="Resume_container" id="Resume">
        <div className="Resume_content">
          <div className="Resume_leftCol">
            <h2>Education</h2>
          </div>
          <div className="Resume_rightCol">
            <h2>LAB University of Applied Sciences</h2>
            <p>
              {" "}
              Bachelor&apos;s Degree Programme in Industrial Information
              Technology (2022 - 2025)
              <br />
              Major: Internet of Things - GPA: 4,57
            </p>
          </div>
        </div>
        <div className="Baseline" />
        <div className="Resume_content">
          <div className="Resume_leftCol">
            <h2>Experience</h2>
          </div>
          <div className="Resume_rightCol">
            {/* PC */}
            <div>
              <h2>
                LAB University of Applied Sciences - Lappeenranta, Finland
              </h2>
              <h3>Project Coordinator</h3>
              <p>May 2025 - Present</p>
              <li>Designed and implemented R&D projects</li>
              <br />
              <li>
                Technologies: React, Vite, TypeScript, React Native, Expo,
                Microsoft Azure
              </li>
            </div>
            <br />

            {/* BE */}
            <div>
              <h2>Piacom - Hanoi, Vietnam</h2>
              <h3>Back-End Developer Trainee</h3>
              <p>May 2024 - August 2024 (4 months)</p>
              <li>
                Built complete backend infrastructure and service using
                Javascript and Firebase, implementing database, authentication,
                and image storage services for a gas station management
                platform.
              </li>
              <br />
              <li>
                Designed efficient booking logic and reservation workflows using
                JavaScript, reducing booking processing time by 10% and
                improving overall user experience.
              </li>
              <br />
              <li>
                Trained on ERP systems and gas station management platforms to
                streamline operations and optimize workflows.
              </li>
              <br />
              <li>
                Deployed serverless architecture with Vercel hosting and
                Firebase backend, achieving 40% cost reduction.
              </li>
              <br />
              <li>
                Technologies: React, Node, JavaScript, Vite, Jest, Firebase,
                Vercel
              </li>
            </div>
            <br />

            {/* FE */}
            <div>
              <h2>FPT Information System - Hanoi, Vietnam</h2>
              <h3>Front-End Developer Trainee</h3>
              <p>May 2023 - August 2023 (4 months)</p>
              <li>
                Optimized React components using Material-UI, improving page
                load performance by 20% on a car booking platform.
              </li>
              <br />
              <li>
                Trained on design patterns (e.g., Component, Render Props) to
                improve code reusability and maintainability.
              </li>
              <br />
              <li>Technologies: React, Node, JavaScript, Material-UI, Vite</li>
            </div>
          </div>
        </div>
        <div className="Baseline" />
        <div className="Resume_content">
          <div className="Resume_leftCol">
            <h2>Skills</h2>
          </div>
          <div className="Resume_rightCol">
            <h4>PROGRAMMING LANGUAGES AND TOOLS</h4>
            <div className="Skills_img">
              <img className="Python" src={Python} alt="Python" />
              <img className="HTML" src={HTML} alt="HTML" />
              <img className="CSS" src={CSS} alt="CSS" />
              <img className="Js" src={Js} alt="Javascript" />
              <img className="Ts" src={Ts} alt="Typescript" />
              <img className="CPP" src={CPP} alt="C++" />
              <img className="react" src={ReactLogo} alt="React Js" />
              <br />
              <img className="Vite" src={Vite} alt="Vite Js" />
              <img className="Node" src={Node} alt="Node Js" />
              <img className="Mocha" src={Mocha} alt="Mocha/Chai" />
              <img className="Selenium" src={Selenium} alt="Selenium" />
              <img className="Jest" src={Jest} alt="Jest" />
              <img className="SQLite" src={SQLite} alt="SQLite" />
              <img className="MySQL" src={MySQL} alt="MySQL" />
              <br />
              <img className="Firebase" src={Firebase} alt="Firebase" />
              <img className="Git" src={Git} alt="Git" />
              <img className="Azure" src={Azure} alt="Azure" />
              <img className="R_Pico" src={R_Pico} alt="R_Pico" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
