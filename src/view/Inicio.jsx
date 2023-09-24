import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg'

import './view.css'

const Inicio = () => {
  return (
    <section>
      <div className='Inicio'>
        <h1><img src={logo} alt="" /></h1>
        <Link to="/limpiezainteligente">
          <Button  className='btn-inicio' variant='info'>Ir a Limpieza Inteligente</Button>
        </Link>
      </div>
    </section>
  );
};

export default Inicio;