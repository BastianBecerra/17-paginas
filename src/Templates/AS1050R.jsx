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
import { obtenerInfoPrin_AS1050R } from '../Componentes/infoJsons/infoPrincipal.js'
import { obtenerUSO_AS1050R } from '../Componentes/infoJsons/infoUsoDelEquipo.js'
import { obtenerAlfinalizarAS1050R } from "../Componentes/infoJsons/infoAlFinalizar.js";
import { obtenerInfoGeneral_AS1050R } from '../Componentes/infoJsons/infoGeneral.js'

const AS710R = () => {

  //Banner
    const [data, setData] = useState([]);
  //

  //inFo Principal
    const [infoPrinc, setInfoPrinc] = useState([]);
  //

  //UsoDelEquipo
    const [USO_AS1050R, setUSO_AS1050R] = useState([]);
  //

  //AL FINALIZAR EL TRABAJO
    const [final, setFinal] = useState([]);
  //
  //General
    const [generalAS1050R ,setGeneralAS1050R] = useState([]);
  //

    useEffect(() => {

        //Banner
        obtenerDataBanner().then(myJson => {setData(myJson);});

        //INFOPRINCIPAL
        obtenerInfoPrin_AS1050R().then(infoPrincipal => {setInfoPrinc(infoPrincipal);});

        //USODELEQUIPO
        obtenerUSO_AS1050R().then(uso => {setUSO_AS1050R(uso);});
        //

        //AL FINALIZAR EL TRABAJO
        obtenerAlfinalizarAS1050R().then(final => {setFinal(final);});
        //


        //INFO GENERAL
        obtenerInfoGeneral_AS1050R().then(general => {setGeneralAS1050R(general)});
    }, []);

    const listas = [
        "Modo Eco para productividad y consumo óptimos; dando hasta 5 horas de tiempo de ejecución",
        "Parachoques robustos, frenado automático y mecánico, reducción automática de velocidad durante las curvas para mayor seguridad.",
        "Panel de control completo con inicio con un solo botón y pantalla LCD para una descripción general operativa",
        "Configuraciones de trabajo ajustables para una mayor flexibilidad de tareas durante la operación en diferentes pisos",
        "Salida USB para cargar unidades USB (por ejemplo, teléfono móvil)",
        "Sistema de doble vacío (opcional) para un rendimiento óptimo de principio a fin",
    ]

    const listasDesc2 = [
    ]

    const videos = [
        "https://nilfiskchile.cl/assets/videos/F-AS1050R/AS1050R_video.mp4"
      ];
      
      const posters = [
        "https://nilfiskchile.cl/assets/videos/F-AS1050R/as1050_video.jpg"
      ];
      
      const thumbnails = [
        "https://nilfiskchile.cl/assets/videos/F-AS1050R/as1050_video.jpg"
      ];

      const elementosCarrusel = [
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraAS1050R/Manuales/catalogo.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregadoraAS1050R/Manuales/AS1050R_Catalogo.pdf",
          label: 'Catálogo',
        },
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraAS1050R/Manuales/uso-y-mantencion.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregadoraAS1050R/Manuales/AS710R_Uso_Mantenciвn.pdf",
          label: 'Uso y mantención',
        },
        {
          imgSrc: "https://nilfiskchile.cl/assets/img/FregadoraAS1050R/Manuales/ficha-tecnica.jpg",
          pdf: "https://nilfiskchile.cl/assets/img/FregadoraAS1050R/Manuales/AS710R_Ficha_Tecnica.pdf",
          label: 'Ficha técnica',
        }
      ];

      
    return (      
        <div>
            <NavBar/>
            <Banner imageClass="BannerBarredora" titulo={data.length > 0 ? data[0].tituloBarredora : ""} />
            <InfoPrincipal data={infoPrinc} listas={listas} listasDesc2={listasDesc2}/>
            <UsoDelEquipo data={USO_AS1050R}/>
            <AlfinalizarElTrabajo data={final} />
            <Video videos={videos} posters={posters} thumbnails={thumbnails}  />
            <General data={generalAS1050R}/>
            <ManualesYDocumentos elementosCarrusel={elementosCarrusel} />
            <RedesSociales />
            <Footer />
        </div>
    );
};

export default AS710R;