import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";

class NavbarComponent extends Component{
  render() {
    return (    
      <Navbar>
        <Navbar.Brand href="#home">arqios</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#inicio">INICIO</Nav.Link>
            <Nav.Link href="#propiedades">PROPIEDADES</Nav.Link>
            <Nav.Link href="#nosotros">NOSOTROS</Nav.Link>
            <Nav.Link href="#contacto">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavbarComponent;