import "./Contact.css";
import Khoi_Do_CV from "../CV/Khoi Do_CV.pdf";

import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="Contact_container" id="Contact">
        <div className="Contact_detail_container">
          <div className="Contact_leftCol">
            <h2>Contact me</h2>
            <div className="Social_icons">
              <a
                className="icon_blue"
                href="https://www.facebook.com/mk.hvsg"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                className="icon_blue"
                href="https://www.linkedin.com/in/minh-khoi-do-827525253/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="icon_black"
                href="https://github.com/khoidm2004"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="Contact_rightCol">
            <div className="Contact_detail">
              <FaEnvelope className="Icon" />{" "}
              <p className="Contact_content">khoidm2004@gmail.com</p>
            </div>
            <div className="Contact_detail">
              <FaPhone className="Icon" />
              <p className="Contact_content">+358 41 791 9341</p>
            </div>
            <div className="Contact_detail">
              <FaLocationArrow className="Icon" />
              <p className="Contact_content"> Lappeenranta, Finland</p>
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
  );
}
