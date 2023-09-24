import React from "react"

import '../UsoYmantenimiento/UsoYmantenimiento.css'

//Import imagenes
import Intruccion1 from '../../../assets/img/FregadoraSc250/UsoYMantencion-Intruc1.png'
import Intruccion2 from '../../../assets/img/FregadoraSc250/UsoYMantencion-Intruc2.png'
import Intruccion3 from '../../../assets/img/FregadoraSc250/UsoYMantencion-Intruc3.png'
import Intruccion4 from '../../../assets/img/FregadoraSc250/UsoYMantencion-Intruc4.png'
import Intruccion5 from '../../../assets/img/FregadoraSc250/UsoYMantencion-Intruc5.png'
import Intruccion6 from '../../../assets/img/FregadoraSc250/UsoYMantencion-Intruc6.png'
import Intruccion7 from '../../../assets/img/FregadoraSc250/UsoYMantencion-Intruc7.png'
import Intruccion8 from '../../../assets/img/FregadoraSc250/UsoYMantencion-Intruc8.png'
import Intruccion9 from '../../../assets/img/FregadoraSc250/UsoYMantencion-Intruc9.png'
import Intruccion10 from '../../../assets/img/FregadoraSc250/UsoYMantencion-Intruc10.png'


const UsoYMantenimiento = () => {
    return(
        <>
            <section className="MiniTitulo py-2">
                 <div className="container">
                    <div className="row">
                        <div className="col-12 text-start d-flex justify-content-between justify-content-md-start">
                            <h3 className="RobotoLigth mb-0 pt-1 pt-sm-0">¿Cómo empiezo a usar el equipo?</h3>
                            <a href="#descripcionGeneral" className="btn btn-primary p-1 p-sm-2 ms-3 pt-1">Ver Video</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">

                <div className="container">
                    <div className="row text-start">
                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={Intruccion1} alt="" />
                            <p className="mt-3 TextBlack">1. Desconecta el cable de la batería del equipo y de la toma de corriente.</p>
                        </div>
                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={Intruccion2} alt="" />
                            <p className="mt-3 TextBlack">2. Llena con agua el tanque de solución. <br/>La temperatura del agua no debe exceder los 40°C.</p>
                        </div>
                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={Intruccion3} alt="" />
                            <p className="mt-3 TextBlack">3. La tapa del tanque puede usarse como dosificador de detergente. Una tapa llena equivale a 30 ml dando 0.5% de detergente (6 Litros) a la capacidad del tanque.</p>
                        </div>
                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={Intruccion4} alt="" />
                            <p className="mt-3 TextBlack">4. Ajusta el mango a la altura deseada. Enciente el equipo con el botón de encendido.</p>
                        </div>
                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={Intruccion5} alt="" />
                            <p className="mt-3 TextBlack">5. Con el pie levante el pedal para que baje la máquina y pueda comenzar a trabajar.</p>
                        </div>
                        
                        <div className="col-12 d-none d-md-block"></div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={Intruccion6} alt="" />
                            <p className="mt-3 TextBlack">6. Toma las manijas para activar el cepillo y el flujo de solución, luego comienza a limpiar el piso.</p>
                        </div>
                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={Intruccion7} alt="" />
                            <p className="mt-3 TextBlack">7. Pulsa el botón de solución, según el tipo de limpieza a realizar.</p>
                        </div>
                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={Intruccion8} alt="" />
                            <p className="mt-3 TextBlack">8. Para la función de barrido, levanta/bloquea la palanca derecha, para poder levantar la escobilla de goma frontal (o squeegee) y así recolectar los residuos pequeños.</p>
                        </div>
                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={Intruccion9} alt="" />
                            <p className="mt-3 TextBlack">9. Para un doble restregado, presiona el botón de succión para apagar el aspirado.</p>
                        </div>
                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={Intruccion10} alt="" />
                            <p className="mt-3 TextBlack">10. Apaga el equipo con el botón de encedido principal.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UsoYMantenimiento