import React from "react";
import '../UsoDelEquipo/UsoDelEquipo.css'

const UsoYMantenimiento = ({ data }) => {
    return (
        <>
            <section className="MiniTitulo py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-start d-flex justify-content-between justify-content-md-start">
                            <h3 className="RobotoLigth mb-0 pt-2 pt-sm-0">¿Cómo empiezo a usar el equipo?</h3>
                            <a href="#section-video" className="btn btn-primary p-2 ms-3 pt-1">Ver Video</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="container">
                    <div className="row text-start">
                    {data[0]?.pasos.map((paso, index) => (
                        <div className={`${paso.colClass} col-md-3 py-4`} key={index}>
                        <img className="boxImg" src={paso.imagen} alt={`Paso ${index + 1}`} />
                        <p className="mt-3 TextBlack">
                            {paso.texto.split('\n').map((line, lineIndex) => (
                            <React.Fragment key={lineIndex}>
                                {line}
                                <br />
                            </React.Fragment>
                            ))}
                        </p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default UsoYMantenimiento;