import React from 'react';
import './assets/css/App.css';
import ComponentTypeHouse from './components/ComponentTypeHouse';
import Footer from './components/Footer';
import Header from './components/Header';
import InteractiveHouse from './components/InteractiveHouse';
import Cards from './components/Cards'; 

function App() {
  return (
    <div className="App"> 
      <Header/>
      <InteractiveHouse/>
      <ComponentTypeHouse/>
      <Footer/>
    </div>
  );
}

export default App;
