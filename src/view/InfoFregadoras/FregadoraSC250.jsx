import React from "react";

//Imports
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Producto-N9087380020/Banner/Banner'
import UsoYMantenimiento from '../../components/Producto-N9087380020/UsoYmantenimiento/UsoYmatenimiento'
import Mantencion from "../../components/Producto-N9087380020/Mantencion/Mantencion";
import SolucionDeProblemas from "../../components/Producto-N9087380020/SolucionDeProblemas/SolucionDeProblemas";
import General from "../../components/Producto-N9087380020/General/General";
import ManualesYDocumentos from '../../components/Producto-N9087380020/ManualesYDocumentos/ManualesYDocumentos'
import RedesSociales from '../../components/RedesSociales/RedesSociales'
import Footer from '../../components/Footer/Footer'

const ProductoN9087380020 = () => {
    return(
        <div>
            <NavBar/>
            <Banner/>
            <UsoYMantenimiento/>
            <Mantencion/>
            <SolucionDeProblemas/>
            <General/>
            <ManualesYDocumentos/>
            <RedesSociales/>
            <Footer/>
        </div>
    )
}

export default ProductoN9087380020