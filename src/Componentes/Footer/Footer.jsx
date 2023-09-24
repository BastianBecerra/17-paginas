import React from "react";

import '../Footer/Footer.css'

import logo from '../../assets/img/logo-footer.svg'

const Footer = () =>{
    return(
        <>
            <section className="FooterBG d-flex flex-wrap justify-content-center aling-items-center">
                <img className="custom-responsive me-3 mb-3 mb-md-0" width={250} src={logo} alt="Nilfisk" />
                <p className="mb-0">Salar de Llamara 822, Parque ENEA - Pudahuel, Santiago - Chile - <a href="mailto:contacto.cl@nilfisk.com" className="text-white text-decoration-none">contacto.cl@nilfisk.com</a></p>
            </section>
            <section className="FooterBG text-md-end">
                <p>Copyright © Nilfisk Group 2023</p>
            </section>
        </>
    )
}

export default Footer