import React from "react";
import NavbarComponent from '../components/NavbarComponent';

function Header() {
  return (    
    <header className="App-header" >
      <NavbarComponent/>
      <div className="TextHeader d-flex justify-content-center align-items-center">
        <div className="text-center col-sm-3">
          <h1>Tu futura casa es inteligente</h1>
        </div>
      </div>
    </header>
  );
}
export default Header;