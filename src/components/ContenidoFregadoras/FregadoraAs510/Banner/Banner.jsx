import React from "react";

import '../Banner/Banner.css'

import Fregadora from '../../../../assets/img/FregadoraViperAS510B/fregadora-viper-as510b.jpg'

function Banner() {
    return(
        <section className="bg-white container-fluid">
            <div className="row">
                <div className="Banimg BannerBarredora">
                    <h1 className="text-end py-4 RobotoBold tituloh1 container text-white">CONOCE TU EQUIPO</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img className="Fregadora" src={Fregadora} alt="" />
                </div>
                <div className="col-12 col-md-6 d-flex align-content-center flex-wrap mb-5 mb-md-0">
                    <div className="w-100">
                        <p className="textcolor text-start mb-2 RobotoBold"><strong>CÓDIGO NILFISK  Y VIPER 50000238</strong></p>
                        <h1 className="text-start RobotoBold tituloh1"><strong>FREGADORA<br/> VIPER AS510 B</strong></h1>
                        <div className="textcolor text-start mb-2 RobotoLigth">La Viper AS510 es una fregadora a baterías de tamaño compacto-mediano. Con este equipo usted podrá:<br/>
                            <ul>
                                <li>Aprender muy rápido a usarla, porque es muy sencilla.</li>
                                <li>Fregar el piso y trasladarse con ella sin problemas, mientras empuja la máquina.</li>
                                <li>Es muy fácil de limpiar y mantener.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;