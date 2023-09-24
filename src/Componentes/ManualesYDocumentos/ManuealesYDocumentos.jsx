import React, { useEffect, useRef } from 'react';
import { MdDownload } from 'react-icons/md';
import '../ManualesYDocumentos/ManualesYDocumentos.css';

import '../../jquery';
import $ from 'jquery';

//OWL Carrusel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';




const ManualesYDocumentos = ({ elementosCarrusel }) =>{

    const downloadFile = (fileUrl, fileName) => {
       const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.target = '_blank';
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
                <div className="row">
                <div className="text-start col-12">
                    <h2 className="RobotoBold tituloManualesDocumentos">MANUALES Y DOCUMENTOS</h2>
                </div>
                <div className="col-12">
                    <div ref={owlCarouselRef} className="owl-carousel">
                    {elementosCarrusel.map((elemento, index) => (
                        <div key={index} className="item">
                        <div>
                            <img className="BoxImg" src={elemento.imgSrc} alt="" />
                            <div className="mt-3">
                            <button
                                className="btn btn-link text-black btn-linea"
                                onClick={() => handleDownload(elemento.pdf)}
                            >
                                <span className="mt-3 RobotoBold">{elemento.label}</span>
                                <MdDownload />
                            </button>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default ManualesYDocumentos