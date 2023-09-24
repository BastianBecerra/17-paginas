import React from "react";
import '../Mantencion/Mantencion.css'

//Import imagen
import MantencionIntruc1 from '../../../assets/img/FregadoraSc250/Mantencion-intro1.png'
import MantencionIntruc2 from '../../../assets/img/FregadoraSc250/Mantencion-intro2.png'
import MantencionIntruc3 from '../../../assets/img/FregadoraSc250/Mantencion-intro3.png'
import MantencionIntruc4 from '../../../assets/img/FregadoraSc250/Mantencion-intro4.png'
import MantencionIntruc5 from '../../../assets/img/FregadoraSc250/Mantencion-intro5.png'
import MantencionIntruc6 from '../../../assets/img/FregadoraSc250/Mantencion-intro6.png'
import MantencionIntruc7 from '../../../assets/img/FregadoraSc250/Mantencion-intro7.png'
import MantencionIntruc8 from '../../../assets/img/FregadoraSc250/Mantencion-intro8.png'
import MantencionIntruc9 from '../../../assets/img/FregadoraSc250/Mantencion-intro9.png'
import MantencionIntruc10 from '../../../assets/img/FregadoraSc250/Mantencion-intro10.png'

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
                            <img className="boxImg" src={MantencionIntruc1} alt="" />
                            <p className="mt-3 TextBlack">1. Para el transportar y estacionar la máquina, pisa el pedal (levanta ligeramente la parte delantera de la máquina inclinando el manubrio).</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc2} alt="" />
                            <p className="mt-3 TextBlack">2. Vacía los tanques de recuperación y solución. Límpialos con agua.</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc3} alt="" />
                            <p className="mt-3 TextBlack">3. Lava con agua limpia la tapa y la rejilla de aspiración.</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc4} alt="" />
                            <p className="mt-3 TextBlack">4. Revisa y limpia regularmente los filtros de aspiración y solución.</p>
                        </div>
                        
                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc5} alt="" />
                            <p className="mt-3 TextBlack">5. Remueve los squeegees.<br/> Quita el cepillo cílindrico girando la perilla lateral a la derecha.</p>
                        </div>

                        <div className="col-12 d-none d-md-block"></div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc6} alt="" />
                            <p className="mt-3 TextBlack">6. Limpia con agua los squeegee y el cepillo cilíndrico.</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc7} alt="" />
                            <p className="mt-3 TextBlack">7. Limpia la bandeja de residuos.</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc8} alt="" />
                            <p className="mt-3 TextBlack">8. Limpia la máquina con un paño húmedo y, si es necesario, utiliza un producto de limpieza neutro.</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc9} alt="" />
                            <p className="mt-3 TextBlack">9. Carga las baterías: Conecta el cable de carga de equipo a una toma de corriente.</p>
                        </div>

                        <div className="col-6 col-md py-4">
                            <img className="boxImg" src={MantencionIntruc10} alt="" />
                            <p className="mt-3 TextBlack">10. Luego, almacena el equipo en un lugar limpio y seco.</p>
                        </div>

                    </div>
                </div>

            </section>
        </>
        
    )
}

export default Mantencion