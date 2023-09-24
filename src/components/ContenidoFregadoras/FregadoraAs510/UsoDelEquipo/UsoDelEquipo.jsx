import React from "react"

import '../UsoDelEquipo/UsoDelEquipo.css'

//Import imagenes
import Intruccion1 from '../../../../assets/img/FregadoraViperAS510B/UsoDeEquipo/uso-equipo-01.jpg'
import Intruccion2 from '../../../../assets/img/FregadoraViperAS510B/UsoDeEquipo/uso-equipo-02.jpg'
import Intruccion3 from '../../../../assets/img/FregadoraViperAS510B/UsoDeEquipo/uso-equipo-03.jpg'
import Intruccion4 from '../../../../assets/img/FregadoraViperAS510B/UsoDeEquipo/uso-equipo-04.jpg'
import Intruccion5 from '../../../../assets/img/FregadoraViperAS510B/UsoDeEquipo/uso-equipo-05.jpg'
import Intruccion6 from '../../../../assets/img/FregadoraViperAS510B/UsoDeEquipo/uso-equipo-06.jpg'
import Intruccion7 from '../../../../assets/img/FregadoraViperAS510B/UsoDeEquipo/uso-equipo-07.jpg'
import Intruccion8 from '../../../../assets/img/FregadoraViperAS510B/UsoDeEquipo/uso-equipo-08.jpg'
import Intruccion9 from '../../../../assets/img/FregadoraViperAS510B/UsoDeEquipo/uso-equipo-09.jpg'
import Intruccion10 from '../../../../assets/img/FregadoraViperAS510B/UsoDeEquipo/uso-equipo-10.jpg'


const UsoYMantenimiento = () => {
    return(
        <>
            <section className="MiniTitulo py-2">
                 <div className="container">
                    <div className="row">
                        <div className="col-12 text-start d-flex justify-content-between justify-content-md-start">
                            <h3 className="RobotoLigth mb-0 pt-2 pt-sm-0">¿Cómo empiezo a usar el equipo?</h3>
                            <a href="#descripcionGeneral" className="btn btn-primary p-2 ms-3 pt-1">Ver Video</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">

                <div className="container">
                    <div className="row text-start">
                        <div className="col-6 col-md-3 py-4">
                            <img className="boxImg" src={Intruccion1} alt="" />
                            <p className="mt-3 TextBlack">1.- Desconecte el cargador de batería y guarde el cable.</p>
                        </div>
                        <div className="col-6 col-md-3 py-4">
                            <img className="boxImg" src={Intruccion2} alt="" />
                            <p className="mt-3 TextBlack">2.- Coloque el cepillo o porta pad debajo de la plataforma de fregado.</p>
                        </div>
                        <div className="col-12 col-md-6 py-4">
                            <img className="boxImg" src={Intruccion3} alt="" />
                            <p className="mt-3 TextBlack">3.- Llene con agua limpia hasta el máximo de 40 litros.<br/> Revise en el indicador del equipo.<br/> Luego añada un detergente de baja espuma adecuado<br/> para la fregadora, en dosis recomendado por el fabricante.</p>
                        </div>
                        <div className="col-6 col-md-3 py-4">
                            <img className="boxImg" src={Intruccion4} alt="" />
                            <p className="mt-3 TextBlack">4.- Presione el botón de encendido general.</p>
                        </div>
                        <div className="col-6 col-md-3 py-4">
                            <img className="boxImg" src={Intruccion5} alt="" />
                            <p className="mt-3 TextBlack">5.- Pulse los botones del mango para enganchar el cepillo.</p>
                        </div>

                        <div className="col-6 col-md-3 py-4">
                            <img className="boxImg" src={Intruccion6} alt="" />
                            <p className="mt-3 TextBlack">6.- Baje el squeegee.</p>
                        </div>
                        <div className="col-6 col-md-3 py-4">
                            <img className="boxImg" src={Intruccion7} alt="" />
                            <p className="mt-3 TextBlack">7.- Pulse el botón de encendido del motor de aspiración.</p>
                        </div>
                        <div className="col-6 col-md-3 py-4">
                            <img className="boxImg" src={Intruccion8} alt="" />
                            <p className="mt-3 TextBlack">8.- Pulse el botón de encendido para el paso de agua.</p>
                        </div>
                        <div className="col-6 col-md-3 py-4">
                            <img className="boxImg" src={Intruccion9} alt="" />
                            <p className="mt-3 TextBlack">9.- Ajuste el squeegee para lograr una óptima captación de agua.</p>
                        </div>
                        <div className="col-6 col-md-3 py-4">
                            <img className="boxImg" src={Intruccion10} alt="" />
                            <p className="mt-3 TextBlack">10.- Inicie la limpieza.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UsoYMantenimiento