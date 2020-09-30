import React from "react";
import NavbarComponent from '../components/NavbarComponent';
// import logo from '../assets/images/logo.svg';
import { Button, Jumbotron, Container } from "react-bootstrap";

function Header() {
  return (    
    <header className="App-header">
      <NavbarComponent/>
      <div class="d-flex justify-content-center">
        <div class="col-md-5">
        <h1>Tu futura casa es inteligente</h1>
        <br/>
        <br/>
        <h5>Llegamos a innovar los bienes raíces en México para hacer tu experiencia de compra increíble como tu futura casa</h5>
        <Button variant="primary" size="lg">
          Conocer más ->
        </Button>{' '}
        </div>
      </div>
    </header>
  );
}
export default Header;