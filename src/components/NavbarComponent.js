import React, { Component } from 'react';

import logo from '../assets/images/Standard.svg';

class NavbarComponent extends Component{
  render() {
    return (    
    <nav className="navbar fixed-top navbar-light bg-light">
      <a className="navbar-brand mb-1 App-logo" ><img src={logo}  alt="logo" /></a>
      {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link MenuHeader" >INICIO</a>
          <a className="nav-item nav-link MenuHeader" >PROPIEDADES</a>
          <a className="nav-item nav-link MenuHeader" >NOSOTROS</a>
          <a className="nav-item nav-link MenuHeader" >CONTACTO</a>
        </div>
      </div> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="MenuArqio">
        <span className="navbar-toggler-icon"></span>
      </button>
      
    </nav>
    );
  }
}

export default NavbarComponent;