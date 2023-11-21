import "./Contact.css"
import { FaFacebook, FaLinkedin, FaGithub,FaEnvelope,FaPhone,FaLocationArrow } from "react-icons/fa"
import Khoi_Do_CV from "../CV/Khoi_Do_CV.pdf"

export default function Contact(){

    return(
        <>
        <div className="Contact_container" id="Contact">
            <div className="Contact_detail_container">
                <div className="Contact_leftCol">
                    <h2>Contact me</h2>
                    <div className="Social_icons">
                        <a className="icon_blue" href="https://www.facebook.com/mk.hvsg"><FaFacebook/></a>
                        <a className="icon_blue" href="https://www.linkedin.com/in/minh-khoi-do-827525253/"><FaLinkedin/></a>
                        <a className="icon_black" href="https://github.com/khoidm2004"><FaGithub/></a>
                    </div>
                </div>
                <div className="Contact_rightCol">
                    <div className="Contact_detail">
                        <FaEnvelope className="Icon"/> <p>khoidm2004@gmail.com</p>
                    </div>
                    <div className="Contact_detail"> 
                        <FaPhone className="Icon"/><p>+358 41 791 9341</p>
                    </div>
                    <div className="Contact_detail">
                        <FaLocationArrow className="Icon"/><p> Lappeenranta, Finland</p>
                    </div>
                </div>
            </div>
            <div className="CV_container">
                <a href={Khoi_Do_CV} download="Khoi_Do_CV">
                    <button>Download CV</button>
                </a>
            </div>
        </div>
        </>
    )
}