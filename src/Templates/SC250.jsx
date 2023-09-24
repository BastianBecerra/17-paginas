import { useEffect, useState } from "react"; 

import NavBar from '../components/NavBar/NavBar'
import Banner from '../Componentes/Banners/Banner';
import UsoDelEquipo5C from '../Componentes/UsoDelEquipo/UsoDelEquipo_5C';
import AlfinalizarElTrabajo5C from '../Componentes/AlFinalizarElTrabajo/AlFinalizarElTrabajo_5C';
import SolucionDeProblemas from '../Componentes/SolucionDeProblemas/SolucionDeProblemas';
import Video from "../Componentes/Video/video";
import General from '../Componentes/General/General';
import ManualesYDocumentos from '../Componentes/ManualesYDocumentos/ManuealesYDocumentos';
import RedesSociales from '../Componentes/RedesSociales/RedesSociales';
import Footer from '../Componentes/Footer/Footer'
import InfoPrincipal from '../Componentes/InfoPrincipal/InfoPrincipal';

import { obtenerDataBanner } from '../Componentes/infoJsons/infoBanner.js'
import { obtenerInfoPrin_SC250 } from '../Componentes/infoJsons/infoPrincipal.js'
import { obtenerUSO_SC250 } from '../Componentes/infoJsons/infoUsoDelEquipo.js'
import { obtenerAlfinalizarSC250 } from "../Componentes/infoJsons/infoAlFinalizar.js";
import { obtenerInfoGeneral_SC250 } from '../Componentes/infoJsons/infoGeneral.js'
import { obtenerSDP_SC250 } from '../Componentes/infoJsons/infoSoluDeProble.js';

const SC250 = () => {

      //Banner
      const [data, setData] = useState([]);
      //
    
      //inFo Principal
        const [infoPrinc, setInfoPrinc] = useState([]);
      //
    
      //UsoDelEquipo
        const [USO_SC250, setUSO_SC250] = useState([]);
      //
    
      //AL FINALIZAR EL TRABAJO
        const [final, setFinal] = useState([]);
      //

      //General
        const [general_SC250 ,setGeneral_SC250] = useState([]);
      //

      //Solucion de Problemas
        const [SDP_SC250, setSDP_SC250] = useState([]);
      //
    
        useEffect(() => {
    
            //Banner
            obtenerDataBanner().then(myJson => {setData(myJson);});
    
            //INFOPRINCIPAL
            obtenerInfoPrin_SC250().then(infoPrincipal => {setInfoPrinc(infoPrincipal);});
    
            //USODELEQUIPO
            obtenerUSO_SC250().then(uso => {setUSO_SC250(uso);});
            //
    
            //AL FINALIZAR EL TRABAJO
            obtenerAlfinalizarSC250().then(final => {setFinal(final);});
            //
      
            //INFO GENERAL
            obtenerInfoGeneral_SC250().then(general => {setGeneral_SC250(general)});
            //

            //SOLUCION DE PROBLEMA
            obtenerSDP_SC250().then(SDP => {setSDP_SC250(SDP)});
            //
        }, []);

        const listas = [
            "Barrer, fregar y secar al mismo tiempo",
            "Limpiar en 2 direcciones: hacia adelante y hacia atrás.",
        ]
        
        const listasDesc2 = [
        ]



        const videos = [
            "https://nilfiskchile.cl/assets/videos/B-SC250/Video-1.mp4",
            "https://nilfiskchile.cl/assets/videos/B-SC250/Video-2.mp4",
            "https://nilfiskchile.cl/assets/videos/B-SC250/Video-3.mp4",
            "https://nilfiskchile.cl/assets/videos/B-SC250/Video-4.mp4"
          ];
          
          const posters = [
            "https://nilfiskchile.cl/assets/videos/B-SC250/video-sc250-01.jpg",
            "https://nilfiskchile.cl/assets/videos/B-SC250/video-sc250-02.jpg",
            "https://nilfiskchile.cl/assets/videos/B-SC250/video-sc250-03.jpg",
            "https://nilfiskchile.cl/assets/videos/B-SC250/video-sc250-04.jpg"
          ];
          
          const thumbnails = [
            "https://nilfiskchile.cl/assets/videos/B-SC250/video-sc250-01.jpg",
            "https://nilfiskchile.cl/assets/videos/B-SC250/video-sc250-02.jpg",
            "https://nilfiskchile.cl/assets/videos/B-SC250/video-sc250-03.jpg",
            "https://nilfiskchile.cl/assets/videos/B-SC250/video-sc250-04.jpg"
          ];

          const elementosCarrusel = [
            {
              imgSrc: "https://nilfiskchile.cl/assets/img/BarredoraSC250/Manuales/catalogo.jpg",
              pdf: "https://nilfiskchile.cl/assets/img/BarredoraSC250/Manuales/SC250_Catalogo.pdf",
              label: 'Catálogo',
            },
            {
              imgSrc: "https://nilfiskchile.cl/assets/img/BarredoraSC250/Manuales/uso-y-mantencion.jpg",
              pdf: "https://nilfiskchile.cl/assets/img/FregadoraViperAS510B/Manuales/SC250_Uso_Mantenciвn.pdf",
              label: 'Uso Y Mantencion',
            },
            {
              imgSrc: "https://nilfiskchile.cl/assets/img/BarredoraSC250/Manuales/ficha-tecnica.jpg",
              pdf: "https://nilfiskchile.cl/assets/img/FregadoraViperAS510B/Manuales/SC250_Ficha Tecnica.pdf",
              label: 'Ficha técnica',
            },
          ];

    return (

        <div>
            <NavBar/>
            <Banner imageClass="BannerFregadora" titulo={data.length > 0 ? data[0].tituloBarredora : ""} />
            <InfoPrincipal data={infoPrinc} listas={listas} listasDesc2={listasDesc2}/>
            <UsoDelEquipo5C data={USO_SC250}/>
            <AlfinalizarElTrabajo5C data={final} />
            <SolucionDeProblemas problemas={SDP_SC250}/>
            <Video videos={videos} posters={posters} thumbnails={thumbnails}  />
            <General data={general_SC250}/>
            <ManualesYDocumentos elementosCarrusel={elementosCarrusel} />
            <RedesSociales />
            <Footer />
        </div>

    );
};

export default SC250;