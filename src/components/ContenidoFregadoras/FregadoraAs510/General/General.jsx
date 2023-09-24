import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Collapse from 'react-bootstrap/Collapse';

import { FaChevronDown, FaChevronUp  } from 'react-icons/fa'; 

// import videos
import Presentacion from '../../../../assets/video/F-AS510/1_AS510B_Viper_video_presentacion_espanol.mp4'
import UsoYMantencion from '../../../../assets/video/F-AS510/2_AS510B_Viper_use_and_care_video_ingles.mp4'
import DemoViper from '../../../../assets/video/F-AS510/Video-3.mp4'


//import imagenes
import Fregadora from '../../../../assets/img/FregadoraViperAS510B/fregadora-viper-as510b.jpg';

import ImagenVid1 from '../../../../assets/video/F-AS510/video-AS510b-01.jpg'
import ImagenVid2 from '../../../../assets/video/F-AS510/video-AS510b-02.jpg';
import ImagenVid3 from '../../../../assets/video/F-AS510/video-AS510b-03.jpg';
import poster1 from '../../../../assets/video/F-AS510/video-AS510b-01.jpg'
import poster2 from '../../../../assets/video/F-AS510/video-AS510b-02.jpg';
import poster3 from '../../../../assets/video/F-AS510/video-AS510b-03.jpg';

import '../General/General.css';

const General = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const media = [
    {
      type: 'video',
      source: Presentacion,
      poster: poster1,
      thumbnail: ImagenVid1,
    },
    {
      type: 'video',
      source: UsoYMantencion,
      poster: poster2,
      thumbnail: ImagenVid2,
    },
    {
      type: 'video',
      source: DemoViper,
      poster: poster3,
      thumbnail: ImagenVid3,
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
                Video
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

        <div className="Col-12">
          <h1 className="RobotoBold py-5">Descripción General</h1>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 order-1">
              <h3 className="text-start py-1 RobotoBold">Especificaciones Técnicas</h3>
            </div>
            <div className="col-12 col-md-7 py-4 order-2 order-md-1">
              <div>
                <ListGroup className="border-0">

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">                    
                    <p className="mb-0 text-black RobotoBold">Modelo No</p>
                    <p className="mb-0 TextGris RobotoBold">50000238</p>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">
                    <p className="mb-0 text-black RobotoBold">Longitud del cable (m)/tipo de enchufe</p>
                    <p className="mb-0 TextGris RobotoBold">N / A</p>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">       
                    <p className="mb-0 text-black RobotoBold">Motor cepillo (W)</p>
                    <p className="mb-0 TextGris RobotoBold">560</p>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">                    
                    <p className="mb-0 text-black RobotoBold">Potencia del motor de aspiración (W)</p>
                    <p className="mb-0 TextGris RobotoBold">350</p>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">                    
                    <p className="mb-0 text-black RobotoBold">Tipo de Batería</p>
                    <p className="mb-0 TextGris RobotoBold">2X12V105Ah/C20 AGM</p>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">                   
                    <p className="mb-0 text-black RobotoBold">Vacío (mm H2O)</p>
                    <p className="mb-0 TextGris RobotoBold">1200</p>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                    <p className="mb-0 text-black RobotoBold">Nivel de presión sonora (dB(A))</p>
                    <p className="mb-0 TextGris RobotoBold">70</p>
                  </ListGroup.Item>

                </ListGroup>
              </div>

              <div>

                <Collapse in={open}>
                  <div id="example-collapse-text">
                  <ListGroup className="border-0">
                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Tasa de productividad (m²/h)</p>
                      <p className="mb-0 TextGris RobotoBold">2100</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Depósito solución (l)</p>
                      <p className="mb-0 TextGris RobotoBold">40</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Depósito recuperación (l)</p>
                      <p className="mb-0 TextGris RobotoBold">40</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Ancho de la escobilla de goma (mm)</p>
                      <p className="mb-0 TextGris RobotoBold">790</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Cepillo/diámetro de la almohadilla (mm)</p>
                      <p className="mb-0 TextGris RobotoBold">510</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Presión del cepillo (kg)</p>
                      <p className="mb-0 TextGris RobotoBold">35 máx.</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Velocidad del cepillo (RPM)</p>
                      <p className="mb-0 TextGris RobotoBold">150</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Dimensiones, L x An x Al (mm)</p>
                      <p className="mb-0 TextGris RobotoBold">1200x610x1170</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Tamaño del compartimento de la batería (L x An x Al) (mm)</p>
                      <p className="mb-0 TextGris RobotoBold">340x330x260</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">máx. peso de carga (kg)</p>
                      <p className="mb-0 TextGris RobotoBold">168</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Peso neto / kg)</p>
                      <p className="mb-0 TextGris RobotoBold">128</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Contador de horas</p>
                      <p className="mb-0 TextGris RobotoBold">Incluido</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Versión de batería</p>
                      <p className="mb-0 TextGris RobotoBold">Incluido</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Mangueras de vaciado de recuperación</p>
                      <p className="mb-0 TextGris RobotoBold">Incluido</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Indicador de nivel de agua</p>
                      <p className="mb-0 TextGris RobotoBold">Incluido</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-md-flex text-start justify-content-between align-items-center border-0 border-top border-bottom px-0">   
                      <p className="mb-0 text-black RobotoBold">Batería incluida</p>
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

            <div className="col-12 col-md-5 py-4 order-1 order-md-2">
              <img className="Fregadora2" src={Fregadora} alt="" />
              <p className="TextBlack text-start">La AS510 es una fregadora compacta de tamaño medio de la línea Viper de Nilfisk, que presenta un atractivo diseño ergonómico que permite al operador supervisar el suelo alrededor de la máquina.</p>
              <p className='TextBlack text-start'>La fregadora AS510B es un modelo versión baterías con cargador incorporado, ofrece gran desempeño de limpieza, robustez y calidad material como se puede apreciar en el depósito rotomoldeado de solución y recuperación integrados en un solo molde y la boquilla de aluminio.
                
                <Collapse in={openDescripcion}>
                    <div>
                      <p className='TextBlack text-start'><br />Se caracteriza por su gran movilidad y ser un equipo fiable, muy fácil de usar y mantener.</p>
                      <p className='TextBlack text-start'>La AS510B es la solución perfecta para zonas muy transitadas. Es ideal para la limpieza a diario de interiores en áreas de tamaño mediano como en hoteles, restaurantes, hospitales, escuelas, centros comerciales y puntos de venta, así como estaciones de metro o tren.</p>
                    </div>
                </Collapse>

                <button className={`btn btn-link TextCeleste text-decoration-none p-0 ${openDescripcion ? '' : 'ps-1'} BotonDescripcion`} onClick={handleButtonClickDescripcion}>
                  {buttonTextDescripcion}
                </button>

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default General;