import React from 'react';

//componentes
import NavBar from '../components/NavBar/NavBar';
import Banner from '../components/Banner/Banner'
import PDF from '../components/SeccionPDF/SeccionPDF'
import Formulario from '../components/Formulario/Formulario';
//

const LimpiezaInteligente = () => {
    return(
        <div>
            <NavBar/>
            <Banner/>
            <PDF/>
            <Formulario/>
            <footer className='py-2 my-2'/>
        </div>
    )
}

export default LimpiezaInteligente;