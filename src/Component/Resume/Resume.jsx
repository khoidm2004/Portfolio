import React from "react"
import "./Resume.css"
import Python from "../Image/Skills/Python.png"
import HTML from "../Image/Skills/HTML.png"
import CSS from "../Image/Skills/CSS.png"
import Js from "../Image/Skills/Js.png"
import Ts from "../Image/Skills/Ts.png"
import CPP from "../Image/Skills/CPP.png"
import react from "../Image/Skills/react.png"
import Vite from "../Image/Skills/Vite.png"
import Node from "../Image/Skills/Node.png"
import Selenium from "../Image/Skills/Selenium.png"
import SQLite from "../Image/Skills/SQLite.png"
import Git from "../Image/Skills/Git.png"
import Mocha from "../Image/Skills/Mocha.png"

export default function Resume(){
    return(
        <>
        <div className="Resume_container" id="Resume">
            <div className="Resume_content">
                <div className="Resume_leftCol">
                    <h2>Education</h2>
                </div>
                <div className="Resume_rightCol">
                    <h2>LAB University of Applied Sciences</h2>
                    <p>Bachelor's Degree Programme in Industrial Information Technology (2022 - 2026)<br/>
                    Major: DevOps Engineering - GPA: 4,27
                    <br/>Present</p>
                </div>
            </div>
            <div className="Baseline"/>
            <div className="Resume_content">
                <div className="Resume_leftCol">
                    <h2>Experience</h2>
                </div>
                <div className="Resume_rightCol">
                    <h2>FPT Information System - Hanoi, Vietnam</h2>
                    <h3>Front-End Trainee</h3>
                    <p>May 2023 - August 2023 (4 months)</p>
                    <li>
                        Enhancing a car booking website by developing features,
                        optimizing code, and conducting maintenance and testing.
                        Demonstrating strong software engineering skills to ensure
                        a seamless user experience.
                    </li>
                    <br/>
                    <li>
                        Technologies: React, Node, Typescript, JavaScript,
                        Material-UI, Vite
                    </li>
                </div>
            </div>
            <div className="Baseline"/>
            <div className="Resume_content">
                <div className="Resume_leftCol">
                    <h2>Skills</h2>
                </div>
                <div className="Resume_rightCol">
                    <h4>PROGRAMMING LANGUAGES AND TOOLS</h4>
                    <div className="Skills_img">
                        <img className="Python" src={Python} />
                        <img className="HTML" src={HTML} />
                        <img className="CSS" src={CSS} />
                        <img className="Js" src={Js} />
                        <img className="Ts" src={Ts} />
                        <img className="CPP" src={CPP} />
                        <img className="react" src={react} /><br/>
                        <img className="Vite" src={Vite} />
                        <img className="Node" src={Node} />
                        <img className="Mocha" src={Mocha} />
                        <img className="Selenium" src={Selenium} />
                        <img className="SQLite" src={SQLite} />
                        <img className="Git" src={Git} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}