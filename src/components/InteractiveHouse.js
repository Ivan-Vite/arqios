import React, { Component } from 'react';
import cil_bed from '../assets/images/interactive_house/cil_bed.png';
import cil_couch from '../assets/images/interactive_house/cil_couch.png';
import cil_door from '../assets/images/interactive_house/cil_door.png';
import cil_garage from '../assets/images/interactive_house/cil_garage.png';
import cil_tv from '../assets/images/interactive_house/cil_tv.png';
//import night from '../assets/images/interactive_house/night.png';
//import ligth from '../assets/images/interactive_house/ligth.png';

const night = require('../assets/images/interactive_house/night.png');
const ligth = require('../assets/images/interactive_house/ligth.png');

class InteractiveHouse extends Component {
  
  state = {
    night_active: true
  }
  toggleImage = () => {
    this.setState(state => ({ night_active: !state.night_active }))
  }
  getImageName = () => this.state.night_active ? night : ligth
  render() {
    const imageName = this.getImageName();
    return (
      <div className="interactive-sect d-flex align-items-center">
        <div className="container">
          <div className="row w-100"><p className="TextInteractiveOne">Bienvenido a casa</p></div>
          <div className="row ">
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-12">
                  <p className="TextInteractiveTwo">Disfruta la casa inteligente de tus sueños</p>
                </div>
                <div className="col-md-12">
                  <p className="SpacingIconInteractive">
                    <img className="IconImageIntereactive" src={cil_couch} alt="couch" />
                  </p>
                </div>
                <div className="col-md-12">
                  <p className="SpacingIconInteractive">
                    <img className="IconImageIntereactive" src={cil_bed} alt="bed" />
                  </p>
                </div>
                <div className="col-md-12">
                  <p className="SpacingIconInteractive">
                    <img className="IconImageIntereactive" src={cil_door} alt="door" />
                  </p>
                </div>
                <div className="col-md-12">
                  <p className="SpacingIconInteractive">
                    <img className="IconImageIntereactive" src={cil_tv} alt="tv" />
                  </p>
                </div>
                <div className="col-md-12">
                  <p className="SpacingIconInteractive">
                    <img className="IconImageIntereactive" src={cil_garage} alt="garage" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <img src={imageName} alt="houseInt" />
            </div>
          </div>
          <div className="row">
            <button type="button" class="btn btn-lg btn-info" onClick={this.toggleImage}>Info</button>
          </div>
        </div>
      </div>
    );
  }
}

export default InteractiveHouse;