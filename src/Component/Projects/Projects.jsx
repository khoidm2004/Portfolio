import NetFlexx from "../Image/Projects/NetFlexx.png";
import QR from "../Image/Projects/QR.png";
import Piacom from "../Image/Projects/Piacom.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Projects.css";

export default function Projects() {
  const image = {
    url: "https://i.pinimg.com/564x/4c/cc/8b/4ccc8bb1d5341177cae1b8e52cdd9b68.jpg",
  };

  const projects = [
    {
      url: "https://petrol-store-management-webapp.vercel.app/auth",
      image: Piacom,
      description: "Petrol Store Management Web Application ⛽",
    },
    {
      url: "https://qr-code-generator-cjtj.vercel.app/",
      image: QR,
      description: "QR Code Generator",
    },
    {
      url: "https://net-flexx-khoidm2004.vercel.app/",
      image: NetFlexx,
      description: "Movie Streaming Website",
    },
    {
      type: "video",
      description: "PLC Programming: Conveyor Controller",
      width: "746",
      height: "400",
      src: "https://www.youtube.com/embed/0fj9uW13SDU",
      title: "Conveyer Controller",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
    },
    {
      type: "video",
      description: "PLC Programming: Conveyor Controller With Counter",
      width: "746",
      height: "400",
      src: "https://www.youtube.com/embed/j67YYtiAQRc",
      title: "Conveyer Controller",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
    },
    {
      type: "video",
      description: "Humidity Data Collection IoT System",
      width: "746",
      height: "400",
      src: "https://www.youtube.com/embed/FhHddqXZUsI",
      title: "Introduction to the Humidity Data Collection IoT System",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
    },
    {
      type: "video",
      description: "Brick Wall Shooting Game (C# + Unity)",
      width: "746",
      height: "400",
      src: "https://www.youtube.com/embed/KbQw87Tvie8",
      title: "Brick wall Task using c# and Unity",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
    },
  ];
  return (
    <>
      <div
        className="Projects_container"
        id="Projects"
        style={{
          backgroundImage: `url(${image.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2>Check out my projects:</h2>
        <div className="Projects_link_container">
          <Slide autoplay={true} duration={2000} pauseOnHover={true}>
            {projects.map((project, index) => (
              <li key={index}>
                {project.type === "video" ? (
                  <div>
                    <iframe
                      style={{
                        marginLeft: "10%",
                      }}
                      width={project.width}
                      height={project.height}
                      src={project.src}
                      title={project.title}
                      frameborder={project.frameborder}
                      allow={project.allow}
                      referrerpolicy={project.referrerpolicy}
                      allowfullscreen
                    />
                    <h4>{project.description}</h4>
                  </div>
                ) : (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <img
                      src={project.image}
                      style={{
                        width: "40%",
                        height: "40%",
                        objectFit: "cover",
                      }}
                    />
                    <h4>{project.description}</h4>
                  </a>
                )}
              </li>
            ))}
          </Slide>
        </div>
      </div>
    </>
  );
}
