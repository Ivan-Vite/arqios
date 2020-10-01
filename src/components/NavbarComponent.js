import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";

class NavbarComponent extends Component{
  render() {
    return (    
      <Navbar>
        <Navbar.Brand  href="#home"><div className="MenuHeader">arqios</div></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#inicio" ><div className="MenuHeader">INICIO</div></Nav.Link>
            <Nav.Link href="#propiedades"><div className="MenuHeader">PROPIEDADES</div></Nav.Link>
            <Nav.Link href="#nosotros"><div className="MenuHeader">NOSOTROS</div></Nav.Link>
            <Nav.Link href="#contacto"><div className="MenuHeader">CONTACTO</div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavbarComponent;