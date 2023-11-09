import React from "react"
import "./Projects.css"
import NetFlexx from "../Image/Projects/NetFlexx.png"
import QR from "../Image/Projects/QR.png"

export default function Projects(){
    const image ={
        url: "https://i.pinimg.com/564x/4c/cc/8b/4ccc8bb1d5341177cae1b8e52cdd9b68.jpg"
    }

    return(
        <>
        <div className="Projects_container" id="Projects" style={{backgroundImage:`url(${image.url})`}}>
            <h2>Check out my projects:</h2>
            <div className="Projects_link_container">
                <a className="NetFlexx" href="https://net-flexx-khoidm2004.vercel.app/">
                    <img className="Projects_img" src={NetFlexx} style={{width:"90%",height:"90%", objectFit:"cover"}}/>
                </a>
                <a  className="QR" href="https://qr-code-generator-cjtj.vercel.app/">
                    <img className="Projects_img" src={QR} style={{width:"90%",height:"90%", objectFit:"cover"}}/>
                </a>
            </div>
        </div>
        </>
    )
}