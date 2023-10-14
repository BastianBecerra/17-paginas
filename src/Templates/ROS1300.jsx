import { useEffect, useState } from "react"; 

import NavBar from '../components/NavBar/NavBar'
import Banner from '../Componentes/Banners/Banner';
import UsoDelEquipo from '../Componentes/UsoDelEquipo/UsoDelEquipo';
import AlfinalizarElTrabajo from '../Componentes/AlFinalizarElTrabajo/AlFinalizarElTrabajo';
import SolucionDeProblemas from '../Componentes/SolucionDeProblemas/SolucionDeProblemas';
import Video from '../Componentes/Video/video';
import General from '../Componentes/General/General';
import ManualesYDocumentos from '../Componentes/ManualesYDocumentos/ManuealesYDocumentos';
import RedesSociales from '../Componentes/RedesSociales/RedesSociales';
import Footer from '../Componentes/Footer/Footer'
import InfoPrincipal from '../Componentes/InfoPrincipal/InfoPrincipal';

import { obtenerDataBanner } from '../Componentes/infoJsons/infoBanner.js'
import { obtenerInfoPrin_ROS1300 } from '../Componentes/infoJsons/infoPrincipal.js'
import { obtenerUSO_ROS1300 } from '../Componentes/infoJsons/infoUsoDelEquipo.js'
import { obtenerAlfinalizarROS1300 } from "../Componentes/infoJsons/infoAlFinalizar.js";
import { obtenerInfoGeneral_ROS1300 } from '../Componentes/infoJsons/infoGeneral.js'
import { obtenerSDP_ROS1300 } from '../Componentes/infoJsons/infoSoluDeProble.js';

const ROS1300 = () => {

  //Banner
    const [data, setData] = useState([]);
  //

  //inFo Principal
    const [infoPrinc, setInfoPrinc] = useState([]);
  //

  //UsoDelEquipo
    const [USO_AS510B, setUSO_AS510B] = useState([]);
  //

  //AL FINALIZAR EL TRABAJO
    const [final, setFinal] = useState([]);
  //
  //General
    const [generalAS510B ,setGeneralAS510B] = useState([]);
  //

    //Solicion de Problemas
    const [SDP_ROS1300, setSDP_ROS1300] = useState([]);
    //
    useEffect(() => {

        //Banner
        obtenerDataBanner().then(myJson => {setData(myJson);});

        //INFOPRINCIPAL
        obtenerInfoPrin_ROS1300().then(infoPrincipal => {setInfoPrinc(infoPrincipal);});

        //USODELEQUIPO
        obtenerUSO_ROS1300().then(uso => {setUSO_AS510B(uso);});
        //

        //AL FINALIZAR EL TRABAJO
        obtenerAlfinalizarROS1300().then(final => {setFinal(final);});
        //


        //INFO GENERAL
        obtenerInfoGeneral_ROS1300().then(general => {setGeneralAS510B(general)});
        //

        //SOLUCION DE PROBLEMAS
        obtenerSDP_ROS1300().then(SDP => {setSDP_ROS1300(SDP)});
        //
    }, []);

    const listas = [
        
    ]

    const listasDesc2 = [
  ]

    const videos = [
        "https://www.youtube.com/embed/-GFWSlO-3jQ?si=i3Kcef-Tw9_j7ay5"
      ];
      
      const posters = [
        "https://nilfiskchile.cl/assets/videos/F-ROS1300/video-01.jpg "
      ];
      
      const thumbnails = [
        "https://nilfiskchile.cl/assets/videos/F-ROS1300/video-01.jpg "
      ];

      const elementosCarrusel = [
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregradoraROS1300/Manuales/barredoras.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregradoraROS1300/Manuales/barredoras.pdf",
          label: 'Barredoras',
        },
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregradoraROS1300/Manuales/ficha-tecnica.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregradoraROS1300/Manuales/ficha-tecnica.pdf",
          label: 'Ficha técnica',
        },
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregradoraROS1300/Manuales/instrucciones-uso.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregradoraROS1300/Manuales/instrucciones-uso.pdf",
          label: 'Instrucciones de uso',
        },
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregradoraROS1300/Manuales/uso-y-mantenimiento.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregradoraROS1300/Manuales/uso-y-mantenimiento.pdf",
          label: 'Uso y mantenimiento',
        }
      ];

      
    return (      
        <div>
            <NavBar/>
            <Banner imageClass="BannerBarredoraYFregadora" titulo={data.length > 0 ? data[0].tituloBarredora : ""} />
            <InfoPrincipal data={infoPrinc} listas={listas} listasDesc2={listasDesc2}/>
            <UsoDelEquipo data={USO_AS510B}/>
            <AlfinalizarElTrabajo data={final} />
            <SolucionDeProblemas problemas={SDP_ROS1300}/>
            <Video videos={videos} posters={posters} thumbnails={thumbnails}  />
            <General data={generalAS510B}/>
            <ManualesYDocumentos elementosCarrusel={elementosCarrusel} />
            <RedesSociales />
            <Footer />
        </div>
    );
};

export default ROS1300;