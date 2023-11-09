import React from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import "./AutoSlider.css"

export default function AutoSlider(){
    const images =[
    {url:"https://images2.alphacoders.com/253/2532.jpg"},
    {url:"https://images3.alphacoders.com/254/2545.jpg"},
    {url:"https://images.alphacoders.com/325/32591.jpg"},
    ];

    return(
        <>
        <div className='AutoSlider_container'>
            <Fade duration={4000}>
                {images.map((image,index)=>(
                    <div key={index} className='background_slide' style={{backgroundImage: `url(${image.url})`}}>
                        <div className='heading_container'>
                            <h1>Khoi Do</h1>
                            <p>Software Engineering</p>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
        </>
    )
}