import { useEffect, useState } from "react"; 

import NavBar from '../components/NavBar/NavBar'
import Banner from '../Componentes/Banners/Banner';
import UsoDelEquipo from '../Componentes/UsoDelEquipo/UsoDelEquipo';
import AlfinalizarElTrabajo from '../Componentes/AlFinalizarElTrabajo/AlFinalizarElTrabajo';
import Video from '../Componentes/Video/video';
import General from '../Componentes/General/General';
import ManualesYDocumentos from '../Componentes/ManualesYDocumentos/ManuealesYDocumentos';
import RedesSociales from '../Componentes/RedesSociales/RedesSociales';
import Footer from '../Componentes/Footer/Footer'
import InfoPrincipal from '../Componentes/InfoPrincipal/InfoPrincipal';

import { obtenerDataBanner } from '../Componentes/infoJsons/infoBanner.js'
import { obtenerInfoPrin_AS510B } from '../Componentes/infoJsons/infoPrincipal.js'
import { obtenerUSO_AS510B } from '../Componentes/infoJsons/infoUsoDelEquipo.js'
import { obtenerAlfinalizarJson } from "../Componentes/infoJsons/infoAlFinalizar.js";
import { obtenerInfoGeneral } from '../Componentes/infoJsons/infoGeneral.js'

const AS510B = () => {

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

    useEffect(() => {

        //Banner
        obtenerDataBanner().then(myJson => {setData(myJson);});

        //INFOPRINCIPAL
        obtenerInfoPrin_AS510B().then(infoPrincipal => {setInfoPrinc(infoPrincipal);});

        //USODELEQUIPO
        obtenerUSO_AS510B().then(uso => {setUSO_AS510B(uso);});
        //

        //AL FINALIZAR EL TRABAJO
        obtenerAlfinalizarJson().then(final => {setFinal(final);});
        //


        //INFO GENERAL
        obtenerInfoGeneral().then(general => {setGeneralAS510B(general)});
    }, []);

    const listas = [
        "Aprender muy rápido a usarla, porque es muy sencilla.",
        "Fregar el piso y trasladarse con ella sin problemas, mientras empuja la máquina.",
        "Es muy fácil de limpiar y mantener."
    ]
    const listasDesc2 = [
    ]

    const videos = [
        "https://nilfiskchile.cl/assets/videos/F-AS510/1_AS510B_Viper_video_presentacion_espanol.mp4",
        "https://nilfiskchile.cl/assets/videos/F-AS510/2_AS510B_Viper_use_and_care_video_ingles.mp4",
        "https://nilfiskchile.cl/assets/videos/F-AS510/Video-3.mp4"
      ];
      
      const posters = [
        "https://nilfiskchile.cl/assets/videos/F-AS510/video-AS510b-01.jpg",
        "https://nilfiskchile.cl/assets/videos/F-AS510/video-AS510b-02.jpg",
        "https://nilfiskchile.cl/assets/videos/F-AS510/video-AS510b-03.jpg"
      ];
      
      const thumbnails = [
        "https://nilfiskchile.cl/assets/videos/F-AS510/video-AS510b-01.jpg",
        "https://nilfiskchile.cl/assets/videos/F-AS510/video-AS510b-02.jpg",
        "https://nilfiskchile.cl/assets/videos/F-AS510/video-AS510b-03.jpg"
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
      ];

      
    return (      
        <div>
            <NavBar/>
            <Banner imageClass="BannerBarredora" titulo={data.length > 0 ? data[0].tituloBarredora : ""} />
            <InfoPrincipal data={infoPrinc} listas={listas} listasDesc2={listasDesc2}/>
            <UsoDelEquipo data={USO_AS510B}/>
            <AlfinalizarElTrabajo data={final} />
            <Video videos={videos} posters={posters} thumbnails={thumbnails}  />
            <General data={generalAS510B}/>
            <ManualesYDocumentos elementosCarrusel={elementosCarrusel} />
            <RedesSociales />
            <Footer />
        </div>
    );
};

export default AS510B;