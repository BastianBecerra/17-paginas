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
import { obtenerInfoPrin_AS710R } from '../Componentes/infoJsons/infoPrincipal.js'
import { obtenerUSO_AS710R } from '../Componentes/infoJsons/infoUsoDelEquipo.js'
import { obtenerAlfinalizarAS710R } from "../Componentes/infoJsons/infoAlFinalizar.js";
import { obtenerInfoGeneral_AS710R } from '../Componentes/infoJsons/infoGeneral.js'

const AS710R = () => {

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
        obtenerInfoPrin_AS710R().then(infoPrincipal => {setInfoPrinc(infoPrincipal);});

        //USODELEQUIPO
        obtenerUSO_AS710R().then(uso => {setUSO_AS510B(uso);});
        //

        //AL FINALIZAR EL TRABAJO
        obtenerAlfinalizarAS710R().then(final => {setFinal(final);});
        //


        //INFO GENERAL
        obtenerInfoGeneral_AS710R().then(general => {setGeneralAS510B(general)});
    }, []);

    const listas = [
        "Un botón único de inicio.",
        "Panel de control intuitivo.",
        "Menú de fácil configuración."
    ]

    const listasDesc2 = [
        "Control de reducción de velocidad automático. ",
        "Y asiento ergonómico con botón de seguridad."
    ]

    const videos = [
        "https://nilfiskchile.cl/assets/videos/F-AS710R/AS710R_Viper_video_Uso y cuidado_esp.mp4"
      ];
      
      const posters = [
        "https://nilfiskchile.cl/assets/videos/F-AS710R/video-AS710R-01.jpg"
      ];
      
      const thumbnails = [
        "https://nilfiskchile.cl/assets/videos/F-AS710R/video-AS710R-01.jpg"
      ];

      const elementosCarrusel = [
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraAS710R/Manuales/presentacion.jpg",
          pdf: "https://nilfiskchile.cl/assets/img//FregadoraAS710R/Manuales/AS710R_Catalogo.pdf",
          label: 'Catálogo',
        },
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraAS710R/Manuales/uso-mantencion.jpg",
          pdf: "https://nilfiskchile.cl/assets/img//FregadoraAS710R/Manuales/AS710R_Uso_Mantenciвn.pdf",
          label: 'Uso Y Mantencion',
        },
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraAS710R/Manuales/ficha-tecnica.jpg",
          pdf: "https://nilfiskchile.cl/assets/img//FregadoraAS710R/Manuales/AS710R_Ficha_Tecnica.pdf",
          label: 'Ficha técnica',
        },
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraAS710R/Manuales/manual-tecnico.jpg",
          pdf: "https://nilfiskchile.cl/assets/img//FregadoraAS710R/Manuales/AS710R_Manual_Tecnico.pdf",
          label: 'Manual Técnico',
        }
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

export default AS710R;