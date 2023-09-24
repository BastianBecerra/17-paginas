import React from "react";

import '../../../components/Producto-N9087380020/Banner/BannerSC250.css'

import Fregadora from '../../../assets/img/FregadoraSc250/FREGADORA.png'

function Banner() {
    return(
        <section className="bg-white container-fluid">
            <div className="row">
                <div className="Banimg BannerFregadora">
                    <h1 className="text-end py-4 RobotoBold tituloh1 container text-white ">CONOCE TU EQUIPO</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img className="Fregadora" src={Fregadora} alt="" />
                </div>
                <div className="col-12 col-md-6 d-flex align-content-center flex-wrap mb-5 mb-md-0">
                    <div className="w-100">
                        <p className="textcolor text-start mb-2 RobotoBold"><strong>CÓDIGO NILFISK 9087380020</strong></p>
                        <h1 className="text-start RobotoBold tituloh1"><strong>FREGADORA<br/> SC250 34C B</strong></h1>
                        <p className="textcolor text-start mb-2 RobotoLigth">La Nilfisk SC250 es una fregadora a baterías, compacta y muy liviana.  Con este equipo usted podrá:</p>
                        <ul className="textcolor text-start mb-2 RobotoLigth">
                            <li>Barrer, fregar y secar al mismo tiempo</li>
                            <li>Limpiar en 2 direcciones: hacia adelante y hacia atrás.</li>
                        </ul>
                        <p className="textcolor text-start mb-2 RobotoLigth">Estas características le permitirán llegar a todos los rincones e incluso limpiar debajo de mesas, muebles y estanterías.</p> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;