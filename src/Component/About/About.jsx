import KD from "../Image/KD/KD.jpg"
import "./About.css"

export default function About(){
    return(
        <>
        <div className="About_container" id="About">
            <div className="About_container_leftCol">
                <img className="KD_img" src={KD} alt="My image"/>
            </div>
            <div className="About_container_rightCol">
                <p>Hi, I am Khoi Do, an ambitious student hailing from Vietnam and currently residing in Finland. I am studying in LAB UAS, where I am engaged in the pursuit of a Bachelor&apos;s degree in Engineering. This cross-continental journey has not only enriched my educational experience but also provided me with a huge job prospect. I am driven by a profound passion for IT field and an unwavering commitment to academic excellence.<br/><br/>
                I am a hardworking and enthusiastic individual, driven by a deep passion for IT fields. I approach every task with dedication and a relentless pursuit of excellence. With a reputation for being reliable and responsible, I take pride in delivering results that meet or exceed expectations. My commitment to my work is unwavering, and I thrive on challenges that push me to grow and excel in every endeavor.
                </p>
            </div>
        </div>
        </>
    )
}