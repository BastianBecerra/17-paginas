import React from "react";
import './Banner.css'

import VideoMar from '../../assets/video/mar.mp4'

function Banner() {
    return(
        <section className="banerbg">
            <div className="content">
                <h1 className="RobotoBold">EL FUTURO DE LA LIMPIEZA INTELIGENTE</h1>
                <h2 className="mt-2 RobotoLigth">Juntos mejoramos la <br />calidad de vida de las personas</h2>  
            </div>
            <video autoPlay loop muted className="video" poster="../../assets/video/mar-caratula.webp">
                <source src={VideoMar} type="video/mp4" />
            </video>
            
        </section>
    )
}

export default Banner;