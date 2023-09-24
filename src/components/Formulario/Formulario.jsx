import React, { useState } from 'react';

//Import de boostrap
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

//import del css wonito
import './Formulario.css';

function Formulario() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Por favor, complete todos los campos');
      return;
    }

    fetch('/Nilfisk.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ nombre: name, correo: email }),
    })

    .then((response) => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })

    .then((data) => {
      console.log('Datos enviados:', data);
      setName('');
      setEmail('');
    })
    
    .catch((error) => {
      console.error('Error:', error);
    });
    
    setIsChecked(false);
  };

  return (
  <section className="container-fluid bg-image mb-5">
    <div className="container">
      <div className="row justify-content-md-end">
        <div className="col-md-auto"></div>
        <div className="col col-md-8 col-lg-6">
          <h2 className="Contacto RobotoBold">
            <strong>Contáctenos</strong>
            </h2>
            <div>
              <Form onSubmit={handleSubmit}>
                <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FloatingLabel>
                
                <FloatingLabel controlId="email" label="Correo electrónico">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FloatingLabel>
                
                <Form.Group as={Row} className="mb-3 mt-3">
                  <Col className="text-start" sm={{ span: 12 }}>
                    <Form.Check
                      type="checkbox"
                      label="Al enviar este formulario, usted acepta que Nilfisk y los miembros del Grupo Nilfisk puedan comunicarse con usted por correo electrónico acerca de sus empresas, productos y servicios a través de comunicaciones de marketing directo."
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                  </Col>
                </Form.Group>
                
                <Button
                  className="w-100 btn-primary"
                  variant="info"
                  type="submit"
                  size="lg"
                  disabled={!isChecked}
                >
                  Enviar
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formulario;
