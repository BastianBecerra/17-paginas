import React from "react";
import '../AlFinalizarElTrabajo/AlFinalizarElTrabajo_5C.css'

const Mantencion = ({ data }) => {
  return (
    <>
    <section className="MiniTitulo py-2">
        <div className="container">
            <div className="row">
                <div className="col-12 text-start d-flex justify-content-between justify-content-md-start">
                    <h3 className="RobotoLigth mb-0 pt-2 pt-sm-0">{data[0]?.titulo}</h3>
                    <a href="#section-video" className="btn btn-primary p-2 ms-3 pt-1">Ver Video</a>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white">
      <div className="container">
        <div className="row text-start">
          {data[0]?.pasos.map((paso, index) => (
            <React.Fragment key={index}>
              <div className={`${paso.colClass} py-4`}>
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
              {(index + 1) % 5 === 0 && (
                <div className="col-12" key={`divider-${index}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
</>
  );
};

export default Mantencion;