import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './NavBar.css'

import logo from '../../assets/img/logo.svg'

function NavBar() {
  return (
    <Navbar className='nav py-4' expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#"><img width={300} src={logo} alt="Nilfisk" /></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;