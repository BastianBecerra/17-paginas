import React from "react";
import '../SolucionDeProblemas/SolucionDeProblemas.css'
import Accordion from 'react-bootstrap/Accordion';
import { BsChevronDown } from 'react-icons/bs';

const SolucionDeProblemas = ({ problemas }) => {
  return (
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
                {problemas.map((problema, index) => (
                  <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header className="d-block d-md-flex justify-content-between">
                      <h3><strong>{problema.titulo}</strong></h3>
                      <div className="accordion-toggle-icon">
                        <p className="mb-0 d-none d-sm-inline-block">Ver más</p>
                        <BsChevronDown/>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="container">
                        <div className="row text-start">
                          {problema.imagen1 && (
                            <div className="col-6 col-md-3 py-4">
                              <img className="Boximg" src={problema.imagen1} alt="" />
                              <p className="TextBlack">{problema.paso1}</p>
                            </div>
                          )}
                          {problema.imagen2 && (
                            <div className="col-6 col-md-3 py-4">
                              <img className="Boximg" src={problema.imagen2} alt="" />
                              <p className="TextBlack">{problema.paso2}</p>
                            </div>
                          )}
                          {problema.imagen3 && (
                            <div className="col-6 col-md-3 py-4">
                              <img className="Boximg" src={problema.imagen3} alt="" />
                              <p className="TextBlack">{problema.paso3}</p>
                            </div>
                          )}
                          {problema.imagen4 && (
                            <div className="col-6 col-md-3 py-4">
                              <img className="Boximg" src={problema.imagen4} alt="" />
                              <p className="TextBlack">{problema.paso4}</p>
                            </div>
                          )}
                          {problema.imagen5 && (
                            <div className="col-6 col-md-3 py-4">
                              <img className="Boximg" src={problema.imagen5} alt="" />
                              <p className="TextBlack">{problema.paso5}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SolucionDeProblemas;