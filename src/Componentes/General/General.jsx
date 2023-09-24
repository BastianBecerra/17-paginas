import React, { useState } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Collapse from 'react-bootstrap/Collapse';

import { FaChevronDown, FaChevronUp  } from 'react-icons/fa'; 

import '../General/General.css';

const General = ({ data }) => {

  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Ver todas las especificaciones');

  const handleButtonClick = () => {
    setOpen(!open);
    if (open) {
      setButtonText('Ver todas las especificaciones');
    } else {
      setButtonText('Ocultar las especificaciones');
    }
  };

  const [openDescripcion, setOpenDescripcion] = useState(false);
  const [buttonTextDescripcion, setButtonTextDescripcion] = useState('Descripción completa...');

  const handleButtonClickDescripcion = () => {
    setOpenDescripcion(!openDescripcion);
    if (openDescripcion) {
      setButtonTextDescripcion('Descripción completa...');
    } else {
      setButtonTextDescripcion('Ver Menos');
    }
  };

  return (
    <section className="bg-white py-5">

      <div className='container'>

        <div className="container mt-5">
          <h1 className='RobotoBold p-5'>
            Descripción General
          </h1>
          <div className="row">

            <div className="col-12 col-md-5 py-4">
              {data.map ((img, index) =>(
                <img className="Fregadora2" src={img.imagenPrincipal} alt="" />
              ))}
              
              {data?.map((item, index) => (
                <div key={index}>
                  {item.descParte1.map((linea, lineaIndex) => (
                    <p key={lineaIndex} className="text-start RobotoLigth TextBlack">
                      {linea.split('\n').map((parrafo, parrafoIndex) => (
                        <React.Fragment key={parrafoIndex}>
                          {parrafo}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  ))}
                </div>
              ))}

              <div className='TextBlack text-start'>
                
                <Collapse in={openDescripcion}>
                    <div>
                    {data?.map((item, index) => (
                        <div key={index}>
                          {item.descParte2.map((linea, lineaIndex) => (
                            <p key={lineaIndex} className="text-start RobotoLigth TextBlack">
                              {linea.split('\n').map((parrafo, parrafoIndex) => (
                                <React.Fragment key={parrafoIndex}>
                                  {parrafo}
                                  <br />
                                </React.Fragment>
                              ))}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                </Collapse>

                <button className={`btn btn-link TextCeleste text-decoration-none p-0 ${openDescripcion ? '' : 'ps-1'} BotonDescripcion`} onClick={handleButtonClickDescripcion}>
                  {buttonTextDescripcion}
                </button>

              </div>
            </div>

            <div className="col-12 col-md-7 py-4">
            <div>
              <h2 className="text-start mb-3 py-1 RobotoBold">Especificaciones Técnicas</h2>
            </div>
              <div>
                <ListGroup className="border-0">

                  {data?.map((especificacion, index) => (
                  <ListGroup.Item
                    key={especificacion.id}
                    className="border-0 p-0"
                  >
                    <div>
                      {especificacion.nombre.map((nombreItem, innerIndex) => (
                        <div key={innerIndex} className='d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0 list-group-item'>
                          <p className="mb-0 text-black RobotoBold">{nombreItem}</p>
                          <p className="mb-0 TextGris RobotoBold">{especificacion.valor[innerIndex]}</p>
                        </div>
                      ))}
                    </div>
                  </ListGroup.Item>
                  ))}

                </ListGroup>
              </div>

              <div>

                <Collapse in={open}>
                  <div id="example-collapse-text">
                  <ListGroup className="border-0">
                    

                  {data?.map((collapseEspecifi, index) => (
                  <ListGroup.Item
                    key={collapseEspecifi.id}
                    className="border-0 p-0"
                  >
                    <div>
                      {collapseEspecifi.nombre_collapse.map((nombreItem, innerIndex) => (
                        <div key={innerIndex} className='d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0 list-group-item'>
                          <p className="mb-0 text-black RobotoBold">{nombreItem}</p>
                          <p className="mb-0 TextGris RobotoBold">{collapseEspecifi.valor_collapse[innerIndex]}</p>
                        </div>
                      ))}
                    </div>
                  </ListGroup.Item>
                  ))}

                    

                  </ListGroup>
                  </div>
                </Collapse>

                <button className="btn btn-link TextCeleste fw-bold text-decoration-none fs-5 mt-5" onClick={handleButtonClick} aria-controls="example-collapse-text" aria-expanded={open}>
                  {buttonText}<br/>
                  {open ? <FaChevronUp/> : <FaChevronDown/>}
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default General;