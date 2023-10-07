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
import { obtenerInfoPrin_AS4325 } from '../Componentes/infoJsons/infoPrincipal.js'
import { obtenerUSO_AS4325 } from '../Componentes/infoJsons/infoUsoDelEquipo.js'
import { obtenerAlfinalizarAS4325 } from "../Componentes/infoJsons/infoAlFinalizar.js";
import { obtenerInfoGeneral_AS4325 } from '../Componentes/infoJsons/infoGeneral.js'

const AS4325 = () => {

  //Banner
    const [data, setData] = useState([]);
  //

  //inFo Principal
    const [infoPrinc, setInfoPrinc] = useState([]);
  //

  //UsoDelEquipo
    const [USO_AS4325, setUSO_AS4325] = useState([]);
  //

  //AL FINALIZAR EL TRABAJO
    const [final, setFinal] = useState([]);
  //
  //General
    const [generalAS4325 ,setGeneralAS4325] = useState([]);
  //

    useEffect(() => {

        //Banner
        obtenerDataBanner().then(myJson => {setData(myJson);});

        //INFOPRINCIPAL
        obtenerInfoPrin_AS4325().then(infoPrincipal => {setInfoPrinc(infoPrincipal);});

        //USODELEQUIPO
        obtenerUSO_AS4325().then(uso => {setUSO_AS4325(uso);});
        //

        //AL FINALIZAR EL TRABAJO
        obtenerAlfinalizarAS4325().then(final => {setFinal(final);});
        //


        //INFO GENERAL
        obtenerInfoGeneral_AS4325().then(general => {setGeneralAS4325(general)});
    }, []);

    const listas = [
        "Los modos Eco y Silencioso facilitan la limpieza durante períodos más largos o en áreas sensibles al sonido",
        "Fácil acceso al tanque de solución, la batería y los componentes de trabajo, con extracción de la espátula sin herramientas",
        "Controles convenientes y pantalla LCD para una capacitación y operación rápidas y efectivas",
        "El diseño de mango ergonómico minimiza la fatiga del operador y se ajusta para múltiples usuarios"
    ]
    const listasDesc2 = [
    ]

    const videos = [
      ];
      
      const posters = [
      ];
      
      const thumbnails = [
      ];

      const elementosCarrusel = [
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraViperAS4325/Manuales/viper-AS4325.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregadoraViperAS4325/Manuales/AS510B Viper_brochure.espanol.pdf",
          label: 'Catálogo',
        },
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraViperAS4325/Manuales/poster-AS4325.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregadoraViperAS4325/Manuales/AS510B_Pвster_Uso y Cuidado_espanol.pdf",
          label: 'Uso Y Mantencion',
        },
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraViperAS4325/Manuales/ficha-tecnica-AS4325.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregadoraViperAS4325/Manuales/AS510 B_ficha_tecnica_espanol.pdF",
          label: 'Ficha técnica',
        },
      ];

      
    return (      
        <div>
            <NavBar/>
            <Banner imageClass="BannerFregadora" titulo={data.length > 0 ? data[0].tituloBarredora : ""} />
            <InfoPrincipal data={infoPrinc} listas={listas} listasDesc2={listasDesc2}/>
            <UsoDelEquipo data={USO_AS4325}/>
            <AlfinalizarElTrabajo data={final} />
            <Video videos={videos} posters={posters} thumbnails={thumbnails}  />
            <General data={generalAS4325}/>
            <ManualesYDocumentos elementosCarrusel={elementosCarrusel} />
            <RedesSociales/>
            <Footer/>
        </div>
    );
};

export default AS4325;