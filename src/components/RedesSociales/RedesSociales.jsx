import React from "react";

import '../RedesSociales/RedesSociales.css'

import logoTelefono from '../../assets/img/icono-phono.svg'

import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillYoutube, AiFillTwitterCircle} from 'react-icons/ai'


const Redes = () => {
    return(
        <section className="Redes">
            <div className="container footer-social d-flex align-items-center justify-content-center">
                <a href="https://www.linkedin.com/company/nilfisk/" target="_blank" rel="noreferrer" className="footer-social-icon d-flex align-items-center justify-content-center">
                    <span><AiFillLinkedin/></span>
                </a>
                <a href="https://www.facebook.com/NilfiskProfessional" target="_blank" rel="noreferrer" className="footer-social-icon d-flex align-items-center justify-content-center">
                    <span><AiFillFacebook/></span>
                </a> 
                <a href="https://www.instagram.com/nilfiskglobal/" target="_blank" rel="noreferrer" className="footer-social-icon d-flex align-items-center justify-content-center">
                    <span><AiFillInstagram/></span>
                </a>
                <a href="https://twitter.com/Nilfiskofficial" target="_blank" rel="noreferrer" className="footer-social-icon d-flex align-items-center justify-content-center">
                    <span><AiFillTwitterCircle/></span> 
                </a>
                <a href="https://www.youtube.com/user/NilfiskProfessional" target="_blank" rel="noreferrer" className="footer-social-icon d-flex align-items-center justify-content-center">
                    <span><AiFillYoutube/></span>
                </a>
            </div>
                        
            <div className="NilfiskBG py-4">
                <h2 className="RobotoBold text-white">¿Necesita ayuda?</h2>
                <h2 className="RobotoLigth text-white">Llámenos Ahora</h2>
                
                <h2 className="RobotoBold numeroTelefono d-flex justify-content-center"><a className="d-flex align-items-center" href="/"><div className="TelefonoImg me-4"><img src={logoTelefono} width={50} alt="Nilfisk" /></div>+569XXXXXXXX</a></h2>
            </div>
        </section>
    )
}

export default Redes