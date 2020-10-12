import React, { Component } from 'react';
import cil_bed from '../assets/images/interactive_house/cil_bed.png';
import cil_couch from '../assets/images/interactive_house/cil_couch.png';
import cil_door from '../assets/images/interactive_house/cil_door.png';
import cil_garage from '../assets/images/interactive_house/cil_garage.png';
import cil_tv from '../assets/images/interactive_house/cil_tv.png';
import house_int1 from '../assets/images/interactive_house/exer-romero-render-night-final 1.png';

class InteractiveHouse extends Component {
  render() {
    return (
      <div className="interactive-sect">
        <div className="container">
          <div className="col-md-12"><p className="TextInteractiveOne">Bienvenido a casa</p></div>
          <div className="row">
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-12">
                 <p className="TextInteractiveTwo">Disfruta la casa inteligente de tus sueños</p> 
                </div>
                <div className="col-md-12">
                  <img src={cil_couch} alt="couch" />
                </div>
                <div className="col-md-12">
                  <img src={cil_bed} alt="bed" />
                </div>
                <div className="col-md-12">
                  <img src={cil_door} alt="door" />
                </div>
                <div className="col-md-12">
                  <img src={cil_tv} alt="tv" />
                </div>
                <div className="col-md-12">
                  <img src={cil_garage} alt="garage" />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <img src={house_int1} alt="houseInt" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InteractiveHouse;