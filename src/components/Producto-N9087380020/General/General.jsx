import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Collapse from 'react-bootstrap/Collapse';

import { FaChevronDown, FaChevronUp  } from 'react-icons/fa'; 

// import videos

import presentacion from '../../../assets/video/P-9087380020/Video-1.mp4'
import UsoYMatencion from '../../../assets/video/P-9087380020/Video-2.mp4'
import DemoUso from '../../../assets/video/P-9087380020/Video-3.mp4'
import UsoYCuidado from '../../../assets/video/P-9087380020/Video-4.mp4'


//import imagenes
import Fregadora from '../../../assets/img/FregadoraSc250/FREGADORA.png';

import ImagenVid1 from '../../../assets/video/P-9087380020/video-sc250-01.jpg'
import ImagenVid2 from '../../../assets/video/P-9087380020/video-sc250-02.jpg';
import ImagenVid3 from '../../../assets/video/P-9087380020/video-sc250-03.jpg';
import ImagenVid4 from '../../../assets/video/P-9087380020/video-sc250-04.jpg';

import poster1 from '../../../assets/video/P-9087380020/video-sc250-01.jpg'
import poster2 from '../../../assets/video/P-9087380020/video-sc250-02.jpg';
import poster3 from '../../../assets/video/P-9087380020/video-sc250-03.jpg';
import poster4 from '../../../assets/video/P-9087380020/video-sc250-04.jpg';

import '../General/General.css';


const General = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const media = [
    {
      type: 'video',
      source: presentacion,
      poster: poster1,
      thumbnail: ImagenVid1,
    },
    {
      type: 'video',
      source: UsoYMatencion,
      poster: poster2,
      thumbnail: ImagenVid2,
    },
    {
      type: 'video',
      source: DemoUso,
      poster: poster3,
      thumbnail: ImagenVid3,
    },
    {
      type: 'video',
      source: UsoYCuidado,
      poster: poster4,
      thumbnail: ImagenVid4,
    },
  ];

  const handleClickThumbnail = (index) => {
    setActiveIndex(index);
  };

  const renderMediaItem = (item, index) => {
    if (item.type === 'video') {
      return (
        <Carousel.Item key={index}>
          <video className="d-block w-100" controls poster={item.poster}>
            <source src={item.source} type="video/mp4" />
          </video>
        </Carousel.Item>
      );
    } else if (item.type === 'url') {
      return (
        <Carousel.Item key={index}>
          <iframe
            src={item.source}
            title={`External Video ${index + 1}`}
            allowFullScreen
            className="d-block w-100"
          ></iframe>
        </Carousel.Item>
      );
    }
  };

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
    <section className="bg-white py-5" id='descripcionGeneral'>

      <div className='container'>

        <div className="row">

          <div className="col-12">

            <div className="videoSlider">
              <h1 className='RobotoBold'>
                Videos
              </h1>
              <div>
                <Carousel className='py-5 px-2' activeIndex={activeIndex} onSelect={handleSelect} controls={false} indicators={false}>
                  {media.map((item, index) => renderMediaItem(item, index))}
                </Carousel>
                <div className="media-thumbnails">
                  {media.map((item, index) => (
                    <div key={index} className={`media-thumbnail ${index === activeIndex ? 'active' : ''}`} onClick={() => handleClickThumbnail(index)}>
                      <div className='thumbnail-square'>
                        <img src={item.thumbnail} alt={`Media ${index + 1}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
          <div className="col-12 col-md-5 py-4 order-1 order-md-2">
              <img className="Fregadora2" src={Fregadora} alt="" />
              <p className="TextBlack text-start">La Nilfisk SC250 es una fregadora compacta para una limpieza rápida y eficiente de suelos duros, cuya versatilidad le permitirá llegar a todos los rincones, incluso debajo de mesas, muebles y estanterías.</p>
              <p className='TextBlack text-start'>Se caracteriza por su capacidad de barrer, fregar y secar al mismo tiempo y de limpiar en 2 direcciones -hacia adelante y hacia atrás- facilitando por mucho la tarea.
                
                <Collapse in={openDescripcion}>
                    <div>
                      <p className='TextBlack text-start'><br />La SC250 es una máquina a baterías muy productiva y liviana, con bajo nivel de ruido lo que la convierte en una opción adecuada (sobre todo para empresas de aseo) para la limpieza diurna. Su uso también es recomendado para lugares con alta interacción de personas tales como, comercios, escuelas, restaurantes, cafeterías, panaderías, hoteles, empresas de limpieza, etc.</p>
                      <p className='TextBlack text-start'>Incorpora el botón “OneTouch™ que activa todas las funciones esenciales y sensores táctiles en el mango que otorgan un control total para facilitar la operación.</p>
                    </div>
                </Collapse>

                <button className="btn btn-link TextCeleste text-decoration-none p-0 ps-1 BotonDescripcion" onClick={handleButtonClickDescripcion}>
                  {buttonTextDescripcion}
                </button>

              </p>
            </div>            

            <div className="col-12">
              <h1 className="RobotoBold p-5">
                Descripción General
              </h1>
            </div>

            <div className="col-12 order-2 order-md-1">
              <h3 className="text-start py-1 RobotoBold">Especificaciones Técnicas</h3>
            </div>
            <div className="col-12 col-md-7 py-4 order-2 order-md-1">
              <div>
                <ListGroup className="border-0">

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">                    
                    <p className="mb-0 text-black RobotoBold">Modelo No</p>
                    <p className="mb-0 TextGris RobotoBold">9087380020</p>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">
                    <p className="mb-0 text-black RobotoBold">Voltaje</p>
                    <p className="mb-0 TextGris RobotoBold">36</p>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">       
                    <p className="mb-0 text-black RobotoBold">Clase de aislamiento</p>
                    <p className="mb-0 TextGris RobotoBold">tercero</p>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">                    
                    <p className="mb-0 text-black RobotoBold">Potencia nominal (W)</p>
                    <p className="mb-0 TextGris RobotoBold">300</p>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">                    
                    <p className="mb-0 text-black RobotoBold">Consumo de energía (kW)</p>
                    <p className="mb-0 TextGris RobotoBold">0.3</p>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">                   
                    <p className="mb-0 text-black RobotoBold">
                      Potencia del motor de aspiración (W)
                    </p>
                    <p className="mb-0 TextGris RobotoBold">180</p>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                    <p className="mb-0 text-black RobotoBold">
                      Nivel de presión sonora a 1,5 m (dB(A) ISO 3744)
                    </p>
                    <p className="mb-0 TextGris RobotoBold">66 ±3</p>
                  </ListGroup.Item>

                </ListGroup>
              </div>

              <div>

                <Collapse in={open}>
                  <div id="example-collapse-text">
                  <ListGroup className="border-0">
                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Productividad teórica/real (m²/h)
                      </p>
                      <p className="mb-0 TextGris RobotoBold">1360/680</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Tiempo de funcionamiento (min.)
                      </p>
                      <p className="mb-0 TextGris RobotoBold">40</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Nivel de vibración del mango (m/s²)
                      </p>
                      <p className="mb-0 TextGris RobotoBold"> {`<`}2.5 </p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Caudal de agua (l/m)
                      </p>
                      <p className="mb-0 TextGris RobotoBold">0,15/0,3</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Depósito solución/recuperación (l)
                      </p>
                      <p className="mb-0 TextGris RobotoBold">6/6</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Ancho de la escobilla de goma (mm)
                      </p>
                      <p className="mb-0 TextGris RobotoBold">340</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Presión del cepillo (kg)
                      </p>
                      <p className="mb-0 TextGris RobotoBold">máximo 12</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Velocidad del cepillo (RPM)
                      </p>
                      <p className="mb-0 TextGris RobotoBold">1000</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Cantidad y tipo de cepillo
                      </p>
                      <p className="mb-0 TextGris RobotoBold">1 cilindro</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Largo x ancho x alto (mm)
                      </p>
                      <p className="mb-0 TextGris RobotoBold">630x425x400</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Peso bruto (gvw) (kg)
                      </p>
                      <p className="mb-0 TextGris RobotoBold">32</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Peso neto / (kg)
                      </p>
                      <p className="mb-0 TextGris RobotoBold">25</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Peso de envío (kg)
                      </p>
                      <p className="mb-0 TextGris RobotoBold">30</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Diseño compacto
                      </p>
                      <p className="mb-0 TextGris RobotoBold">Incluido</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Batería de iones de litio
                      </p>
                      <p className="mb-0 TextGris RobotoBold">Incluido</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Entregado listo para usar (paquete completo)
                      </p>
                      <p className="mb-0 TextGris RobotoBold">Incluido</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                      Botón One-Touch™
                      </p>
                      <p className="mb-0 TextGris RobotoBold">Incluido</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Solución tanque en tanque
                      </p>
                      <p className="mb-0 TextGris RobotoBold">Incluido</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">
                        Fregar y barrer
                      </p>
                      <p className="mb-0 TextGris RobotoBold">Incluido</p>
                    </ListGroup.Item>

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