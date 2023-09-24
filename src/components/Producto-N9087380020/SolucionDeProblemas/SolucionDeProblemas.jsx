import React from "react";

import '../SolucionDeProblemas/SolucionDeProblemas.css'

import Accordion from 'react-bootstrap/Accordion';

import { BsChevronDown } from 'react-icons/bs';

//import imagenes
import SolucionDPIntruc1 from '../../../assets/img/FregadoraSc250/SolucionDProblemas-intruc1.png'
import SolucionDPIntruc2 from '../../../assets/img/FregadoraSc250/SolucionDProblemas-intruc2.png'
import SolucionDPIntruc3 from '../../../assets/img/FregadoraSc250/SolucionDProblemas-intruc3.png'

// succion
import SuccionProblema1 from '../../../assets/img/FregadoraSc250/succion-01.jpg'
import SuccionProblema2 from '../../../assets/img/FregadoraSc250/succion-02.jpg'
import SuccionProblema3 from '../../../assets/img/FregadoraSc250/succion-03.jpg'
import SuccionProblema4 from '../../../assets/img/FregadoraSc250/succion-04.jpg'

// Limpia

import LimpiaProblema1 from '../../../assets/img/FregadoraSc250/limpia-01.jpg'
import LimpiaProblema2 from '../../../assets/img/FregadoraSc250/limpia-02.jpg'
import LimpiaProblema3 from '../../../assets/img/FregadoraSc250/limpia-03.jpg'

// Pincel
import PincelProblema1 from '../../../assets/img/FregadoraSc250/pincel-01.jpg'
import PincelProblema2 from '../../../assets/img/FregadoraSc250/pincel-02.jpg'
import PincelProblema3 from '../../../assets/img/FregadoraSc250/pincel-03.jpg'

const SolucionDeProblemas = () =>{

    return(
        <>
            <section className="MiniTitulo py-2">
                 <div className="container">
                    <div className="row">
                        <div className="col-12 text-start d-flex justify-content-between justify-content-md-start">
                            <h3 className="RobotoLigth mb-0 pt-1 pt-sm-0">Solución de Problemas</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="container">

                <div className="row">
                    <div className="col-12 py-5 my-5">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header className="d-block d-md-flex justify-content-between">
                                <h3>
                                    <strong>La máquina no funciona, ¿cómo debería?</strong>
                                </h3>
                                <div className="accordion-toggle-icon">
                                    <p className="mb-0 d-none d-sm-inline-block">Ver más</p>
                                    <BsChevronDown/>
                                </div>
                            </Accordion.Header>
                                <Accordion.Body>
                                    <div className="container">
                                        <div className="row text-start">
                                            <div className="col-6 col-md-3 py-4">
                                                <img className="Boximg" src={SolucionDPIntruc1} alt="" />
                                                <p className="TextBlack">1. Comprueba si la batería está cargada.</p>
                                            </div>

                                            <div className="col-6 col-md-3 py-4">
                                                <img className="Boximg" src={SolucionDPIntruc2} alt="" />
                                                <p className="TextBlack">2. Comprueba si la batería está en la posición correcta.</p>
                                            </div>

                                            <div className="col-6 col-md-3 py-4">
                                                <img className="Boximg" src={SolucionDPIntruc3} alt="" />
                                                <p className="TextBlack">3. Revisa si hay parpadeo de luces LED. Una falla en el equipo se puede indicar por medio de LED’s parpadeantes (*)</p>
                                            </div>

                                            <div className="col-6 col-md-3 py-4">
                                                <p className="TextBlack">
                                                (*) En estos casos el procedimiento de mantenimiento debe ser realizado por un Centro de Servicio Nilfisk autorizado.<br/> Para mayor información revisar el Manual de Servicio
                                                </p>            
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <h3>
                                        <strong>La succión no funciona, ¿cómo debería?</strong>
                                    </h3>
                                    <div className="accordion-toggle-icon">
                                        <p className="mb-0 d-none d-sm-inline-block">Ver más</p>
                                        <BsChevronDown/>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="container">
                                        <div className="row text-start">

                                            <div className="col-6 col-md-3">
                                                <img className="Boximg" src={SuccionProblema1} alt="" />
                                                <p className="TextBlack">1. Comprueba si el depósito de recuperación está lleno.</p>
                                            </div>

                                            <div className="col-6 col-md-3">
                                                <img className="Boximg" src={SuccionProblema2} alt="" />
                                                <p className="TextBlack">2. Revisa si suciedad o residuos están bloqueando la entrada del squeegee, y si las cuchillas están gastadas o dañadas.</p>
                                            </div>

                                            <div className="col-6 col-md-3">
                                                <img className="Boximg" src={SuccionProblema3} alt="" />
                                                <p className="TextBlack">3. Enjuaga con agua el interior de la manguera de recuperación.</p>
                                            </div>

                                            <div className="col-6 col-md-3">
                                                <img className="Boximg" src={SuccionProblema4} alt="" />
                                                <p className="TextBlack">4. Revisa si el flotador está limpio.</p>
                                            </div>

                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <h3>
                                        <strong>La máquina no limpia, ¿cómo debería?</strong>
                                    </h3>
                                    <div className="accordion-toggle-icon">
                                        <p className="mb-0 d-none d-sm-inline-block">Ver más</p>
                                        <BsChevronDown/>
                                    </div> 
                                    </Accordion.Header>
                                <Accordion.Body>
                                    <div className="container">
                                        <div className="row text-start">

                                            <div className="col-6 col-md-3">
                                                <img className="Boximg" src={LimpiaProblema1} alt="" />
                                                <p className="TextBlack">1. Comprueba si el filtro de solución está sucio y limpiarlo si es necesario.</p>
                                            </div>

                                            <div className="col-6 col-md-3">
                                                <img className="Boximg" src={LimpiaProblema2} alt="" />
                                                <p className="TextBlack">2. Revisa si los dispensadores de solución están obstruidos. Retira y límpialos en caso de ser necesario.</p>

                                            </div>

                                            <div className="col-6 col-md-3">
                                                <img className="Boximg" src={LimpiaProblema3} alt="" />
                                                <p className="TextBlack">3. Comprueba si la válvula de conexión rápida no tiene fugas.</p>
                                            </div>

                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    <h3>
                                        <strong>El cepillo no funciona, ¿cómo debería?</strong>
                                    </h3>
                                    <div className="accordion-toggle-icon">
                                        <p className="mb-0 d-none d-sm-inline-block">Ver más</p>
                                        <BsChevronDown/>
                                    </div>
                                    </Accordion.Header>
                                <Accordion.Body>
                                    <div className="container">
                                        <div className="row text-start">

                                            <div className="col-6 col-md-3">
                                                <img className="Boximg" src={PincelProblema1} alt="" />
                                                <p className="TextBlack">1. Ajusta la presión del cepillo girando la perilla de regulación.</p>
                                            </div>

                                            <div className="col-6 col-md-3">
                                                <img className="Boximg" src={PincelProblema2} alt="" />
                                                <p className="TextBlack">2. Revisa el desgaste del cepillo y asegúrate que éste correctamente instalado.</p>

                                            </div>

                                            <div className="col-6 col-md-3">
                                                <img className="Boximg" src={PincelProblema3} alt="" />
                                                <p className="TextBlack">3. Comprueba que no haya residuos que impidan que el cepillo gire.</p>
                                            </div>

                                        </div>
                                    </div> 
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>
                </div>

                </div>

            </section>
        </>
    )
}

export default SolucionDeProblemas