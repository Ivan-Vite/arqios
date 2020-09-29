import React from "react";

function Navbar() {
  return (    
    <nav>
      <div className="navbar--logo-holder">
        <h1> Arqio</h1>
      </div>    
      <ul className="navbar--link">
          <li className="navbar--link-item">Inicio</li>
          <li className="navbar--link-item">Propiedades</li>
          <li className="navbar--link-item">Nosotros</li>
          <li className="navbar--link-item">Contacto</li>
      </ul>
    </nav>
  );
}
export default Navbar;