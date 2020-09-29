import React from 'react';
import './assets/css/App.css';

import ComponentTypeHouse from './components/ComponentTypeHouse';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <section className="componentes">
          <ComponentTypeHouse/>
        </section>
      <Footer/>
    </div>
  );
}

export default App;
