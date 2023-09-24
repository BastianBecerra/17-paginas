import React from "react";

//Imports
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/ContenidoFregadoras/FregadoraAs510/Banner/Banner'
import UsoDelEquipo from '../../components/ContenidoFregadoras/FregadoraAs510/UsoDelEquipo/UsoDelEquipo'
import AlFinalizarEltrabajo from "../../components/ContenidoFregadoras/FregadoraAs510/AlFinalizarElTrabajo/AlFinalizarElTrabajo";
import General from "../../components/ContenidoFregadoras/FregadoraAs510/General/General";
import ManualesYDocumentos from '../../components/ContenidoFregadoras/FregadoraAs510/ManualesYDocumentos/ManuealesYDocumentos'
import RedesSociales from '../../components/RedesSociales/RedesSociales'
import Footer from '../../components/Footer/Footer'

const FregadoraAS510 = () => {
    return(
        <div>
            <NavBar/>
            <Banner/>
            <UsoDelEquipo/>
            <AlFinalizarEltrabajo/>           
            <General/>
            <ManualesYDocumentos/>
            <RedesSociales/>
            <Footer/>
        </div>
    )
}

export default FregadoraAS510