import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import Modeswitch from './modeswitch';

function TP5() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">TP5</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/Calcul">Calculatrice</Link></Nav.Link>
            <Nav.Link><Link to="/Slider">Slider</Link></Nav.Link>
            <Nav.Link><Link to="/Todolist">Todolist</Link></Nav.Link>
            <Nav.Link><Link to="/API">API</Link></Nav.Link>
            <Nav.Link><Link to="/Lang">Langue</Link></Nav.Link>

            <Nav.Link>
              <Modeswitch/>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TP5;