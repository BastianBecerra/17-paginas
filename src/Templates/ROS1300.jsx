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
        "https://nilfiskchile.cl/assets/videos/F-AS510/1_AS510B_Viper_video_presentacion_espanol.mp4"
      ];
      
      const posters = [
        "https://nilfiskchile.cl/assets/videos/F-AS510/video-AS510b-01.jpg"
      ];
      
      const thumbnails = [
        "https://nilfiskchile.cl/assets/videos/F-AS510/video-AS510b-01.jpg"
      ];

      const elementosCarrusel = [
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraViperAS510B/Manuales/viper-AS510b.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregadoraViperAS510B/Manuales/AS510B Viper_brochure.espanol.pdf",
          label: 'Catálogo',
        },
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraViperAS510B/Manuales/poster-AS510b.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregadoraViperAS510B/Manuales/AS510B_Pвster_Uso y Cuidado_espanol.pdf",
          label: 'Uso Y Mantencion',
        },
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraViperAS510B/Manuales/ficha-tecnica-AS510b.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregadoraViperAS510B/Manuales/AS510 B_ficha_tecnica_espanol.pdfF",
          label: 'Ficha técnica',
        },
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraViperAS510B/Manuales/ficha-tecnica-AS510b.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregadoraViperAS510B/Manuales/AS510 B_ficha_tecnica_espanol.pdfF",
          label: 'Ficha técnica',
        }
      ];

      
    return (      
        <div>
            <NavBar/>
            <Banner imageClass="BannerBarredora" titulo={data.length > 0 ? data[0].tituloBarredora : ""} />
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