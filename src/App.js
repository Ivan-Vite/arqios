import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import ComponentTypeHouse from './components/ComponentTypeHouse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<h1>ARQIOS</h1>
        <p>
          Edit <code>src/App.js</code> and save to reloa.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section className="componentes">
          <ComponentTypeHouse/>
        </section>
    </div>
  );
}

export default App;
