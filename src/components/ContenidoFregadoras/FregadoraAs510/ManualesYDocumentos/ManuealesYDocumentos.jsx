import React, { useEffect, useRef } from 'react';

import '../../../../jquery';
import $ from 'jquery';


import '../ManualesYDocumentos/ManualesYDocumentos.css'

import { MdDownload }  from "react-icons/md";

//OWL Carrusel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

//Import Imagenes
import catalogo from '../../../../assets/PDF/F-AS510/viper-AS510b.jpg';
import usoYmantencion from '../../../../assets/PDF/F-AS510/poster-AS510b.jpg'
import fichaTecnica from '../../../../assets/PDF/F-AS510/ficha-tecnica-AS510b.jpg'
//

//Import pdfs
import catalogoPDF from "../../../../assets/PDF/F-AS510/AS510B Viper_brochure.español.pdf";
import usoYmantencionPFD from "../../../../assets/PDF/F-AS510/AS510B_Póster_Uso y Cuidado_español.pdf";
import fichaTecnicaPDF from "../../../../assets/PDF/F-AS510/AS510 B_ficha_técnica_español.pdf";
//


const ManualesYDocumentos = () =>{

    const downloadFile = (fileUrl, fileName) => {
       const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.click();
      };
    
     const handleDownload = (pdf) => {
        downloadFile(pdf, `${pdf}`);
      };

      const owlCarouselRef = useRef(null);

      useEffect(() => {
        if (owlCarouselRef.current) {
          // Inicializa el carrusel Owl Carousel
          $(owlCarouselRef.current).owlCarousel({
            items: 4,
            loop: true,
            margin: 15,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                  items: 3
                }
              }
          });
        }
      }, []);

    return(
        <section className="MYD py-5">
            <div className="container">
                <div className='row'>
                    <div className="text-start col-12">
                        <h2 className="RobotoBold tituloManualesDocumentos">MANUALES Y DOCUMENTOS</h2>
                    </div>
                    <div className='col-12'>    
                        <div ref={owlCarouselRef} className="owl-carousel">
                            <div className="item">
                                <div>
                                    <img className="BoxImg" src={catalogo} alt="" />
                                    <div className="mt-3">
                                        <button className="btn btn-link text-black btn-linea" onClick={() => handleDownload(catalogoPDF)}>
                                            <span className="mt-3 RobotoBold">Catálogo</span>
                                            <MdDownload />
                                        </button>
                                    </div> 
                                </div>
                            </div>

                            <div className="item"> 
                                <div>
                                    <img className="BoxImg" src={usoYmantencion} alt="" />
                                    <div className="mt-3">
                                        <button className="btn btn-link text-black btn-linea" onClick={() => handleDownload(usoYmantencionPFD)}>
                                            <span className="mt-3 RobotoBold">Uso Y Mantencion</span>
                                            <MdDownload />
                                        </button>
                                    </div> 
                                </div>
                            </div>

                            <div className="item">
                                <div>
                                    <img className="BoxImg" src={fichaTecnica} alt="" />
                                    <div className="mt-3">
                                        <button className="btn btn-link text-black btn-linea" onClick={() => handleDownload(fichaTecnicaPDF)}>
                                        <span className="mt-3 RobotoBold">Ficha técnica</span>
                                            <MdDownload />
                                        </button>
                                    </div> 
                                </div>
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ManualesYDocumentos

//<h5 className='subTituloManualesDocumentos TextBlack RobotoMedium'>NILFISK SCRUBBER SC250 34C B EU/UK</h5> borrado de la linea 7