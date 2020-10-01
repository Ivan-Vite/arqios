import React from "react";
import NavbarComponent from '../components/NavbarComponent';
// import logo from '../assets/images/logo.svg';
import { Button, Jumbotron, Container } from "react-bootstrap";

function Header() {
  return (    
    <header className="App-header" >
      <NavbarComponent/>
      <div class="TextHeader d-flex justify-content-start align-items-center">
        <div class="col-md-2"></div>
        <div class="col-md-4 text-left">
          <h1>Tu futura casa es inteligente</h1>
          <br/>
          <br/>
          <h5>Llegamos a innovar los bienes raíces en México para hacer tu experiencia de compra increíble como tu futura casa</h5>
          <button type="button" class="btn btn-lg" className="btn-flat">Conocer más</button>
        </div>
        <div class="col-md-6"></div>
      </div>
    </header>
  );
}
export default Header;