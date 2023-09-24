import React from "react";
import '../AlFinalizarElTrabajo/AlFinalizarElTrabajo.css'

//Import imagen
import MantencionIntruc1 from '../../../../assets/img/FregadoraViperAS510B/AlFinTrabajo/fin-trabajo-01.jpg'
import MantencionIntruc2 from '../../../../assets/img/FregadoraViperAS510B/AlFinTrabajo/fin-trabajo-02.jpg'
import MantencionIntruc3 from '../../../../assets/img/FregadoraViperAS510B/AlFinTrabajo/fin-trabajo-03.jpg'
import MantencionIntruc4 from '../../../../assets/img/FregadoraViperAS510B/AlFinTrabajo/fin-trabajo-04.jpg'
import MantencionIntruc5 from '../../../../assets/img/FregadoraViperAS510B/AlFinTrabajo/fin-trabajo-05.jpg'
import MantencionIntruc6 from '../../../../assets/img/FregadoraViperAS510B/AlFinTrabajo/fin-trabajo-06.jpg'
import MantencionIntruc7 from '../../../../assets/img/FregadoraViperAS510B/AlFinTrabajo/fin-trabajo-07.jpg'
import MantencionIntruc8 from '../../../../assets/img/FregadoraViperAS510B/AlFinTrabajo/fin-trabajo-08.jpg'
import MantencionIntruc9 from '../../../../assets/img/FregadoraViperAS510B/AlFinTrabajo/fin-trabajo-09.jpg'
import MantencionIntruc10 from '../../../../assets/img/FregadoraViperAS510B/AlFinTrabajo/fin-trabajo-10.jpg'

const Mantencion = () => {
    return(
        <>
            <section className="MiniTitulo py-2">
                 <div className="container">
                    <div className="row">
                        <div className="col-12 text-start d-flex justify-content-between justify-content-md-start">
                            <h3 className="RobotoLigth mb-0 pt-2 pt-sm-0">Al terminar de usar el equipo, ¿qué debo hacer?</h3>
                            <a href="#descripcionGeneral" className="btn btn-primary p-2 ms-3 pt-1">Ver Video</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">

                <div className="container">
                    <div className="row text-start">
                        
                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc1} alt="intrucción 1" />
                            <p className="mt-3 TextBlack">1.- Apague la máquina.</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc2} alt="intrucción 2" />
                            <p className="mt-3 TextBlack">2.- Vacié el estanque de recuperación o agua sucia.</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc3} alt="intrucción 3" />
                            <p className="mt-3 TextBlack">3.- Lave el estanque de recuperación o agua sucia.</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc4} alt="intrucción 4" />
                            <p className="mt-3 TextBlack">4.- Cierre la válvula de solución o de agua limpia, previamente a la limpieza del filtro.</p>
                        </div>
                        
                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc5} alt="intrucción 5" />
                            <p className="mt-3 TextBlack">5.- Revise y limpie el filtro de agua (semanalmente).</p>
                        </div>

                        <div className="col-12 d-none d-md-block"></div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc6} alt="intrucción 6" />
                            <p className="mt-3 TextBlack">6.- Retire el squeegee y proceda a revisar y limpiar las gomas. (darlas vuelta si es necesario)</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc7} alt="intrucción 7" />
                            <p className="mt-3 TextBlack">7.- Inspeccione el estado del cepillo o pad.</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc8} alt="intrucción 8" />
                            <p className="mt-3 TextBlack">8.- Estacione la máquina con la tapa del depósito de recuperación abierta.</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc9} alt="intrucción 9" />
                            <p className="mt-3 TextBlack">9.- Conecte el cable del cargador de baterías a la red eléctrica por al menos 8 hrs.</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc10} alt="intrucción 10" />
                            <p className="mt-3 TextBlack">Importante: Si el equipo queda inoperativo, se debe desconectar el enchufe de las baterías.</p>
                        </div>

                    </div>
                </div>

            </section>
        </>
        
    )
}

export default Mantencion