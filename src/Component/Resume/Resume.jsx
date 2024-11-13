import "./Resume.css";

import Python from "../Image/Skills/Python.png";
import HTML from "../Image/Skills/HTML.png";
import CSS from "../Image/Skills/CSS.png";
import Js from "../Image/Skills/Js.png";
import Ts from "../Image/Skills/Ts.png";
import CPP from "../Image/Skills/CPP.png";
import ReactLogo from "../Image/Skills/ReactLogo.png";
import Vite from "../Image/Skills/Vite.png";
import Node from "../Image/Skills/Node.png";
import Selenium from "../Image/Skills/Selenium.png";
import SQLite from "../Image/Skills/SQLite.png";
import Git from "../Image/Skills/Git.png";
import Mocha from "../Image/Skills/Mocha.png";
import MySQL from "../Image/Skills/MySQL.png";
import Jest from "../Image/Skills/Jest.png";
import Firebase from "../Image/Skills/Firebase.png";

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
              Technology (2022 - 2026)
              <br />
              Major: Internet of Things - GPA: 4,54
            </p>
          </div>
        </div>
        <div className="Baseline" />
        <div className="Resume_content">
          <div className="Resume_leftCol">
            <h2>Experience</h2>
          </div>
          <div className="Resume_rightCol">
            <div>
              <h2>FPT Information System - Hanoi, Vietnam</h2>
              <h3>Front-End Developer Trainee</h3>
              <p>May 2023 - August 2023 (4 months)</p>
              <li>
                Enhancing a car booking website by developing features,
                optimizing code, and conducting maintenance and testing.
                Demonstrating strong software engineering skills to ensure a
                seamless user experience.
              </li>
              <br />
              <li>
                Collaborating with cross-functional teams to implement
                responsive design principles, improving the website&apos;s
                accessibility and ensuring a consistent user interface across
                various devices.
              </li>
              <br />
              <li>
                Actively participated in code reviews, providing constructive
                feedback and implementing best practices, contributing to the
                overall code quality and fostering a collaborative development
                environment.
              </li>
              <br />
              <li>
                Technologies: React, Node, Typescript, JavaScript, Material-UI,
                Vite
              </li>
              <div>
                <h2>Piacom - Hanoi, Vietnam</h2>
                <h3>Back-End Developer Trainee</h3>
                <p>May 2024 - August 2024 (4 months)</p>
                <li>
                  Developed web applications for gas station management,
                  including inventory control, fuel tracking, and sales
                  monitoring.
                </li>
                <br />
                <li>
                  Trained on ERP systems and gas station management platforms to
                  streamline operations and optimize workflows.
                </li>
                <br />
                <li>
                  Technologies: React, Node, JavaScript, Vite, Jest, Firebase
                </li>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
