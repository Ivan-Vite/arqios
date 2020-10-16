import React, { Component } from 'react';
import cil_bed from '../assets/images/interactive_house/cil_bed.png';
import cil_couch from '../assets/images/interactive_house/cil_couch.png';
import cil_door from '../assets/images/interactive_house/cil_door.png';
import cil_garage from '../assets/images/interactive_house/cil_garage.png';
import cil_tv from '../assets/images/interactive_house/cil_tv.png';
import cil_audio from '../assets/images/interactive_house/cil_audio.svg';
const night = require('../assets/images/interactive_house/night.png');
const ligth = require('../assets/images/interactive_house/ligth.png');


class InteractiveHouse extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      night_active: true,
      bgColor: true
    }
  }

  changeViewHouse = () => {
    this.setState(state => ({ night_active: !state.night_active, bgColor: !state.bgColor}))
  }
  getImageName = () => this.state.night_active ? night : ligth
  getColorBack = () => this.state.bgColor ? 'interactive-sect-night d-flex align-items-center' : 'interactive-sect-ligth d-flex align-items-center'
  render() {
    const imageName = this.getImageName();
    return (
      <div className={this.getColorBack()}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12"><p className="TextInteractiveOne">Bienvenido a casa</p></div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-12">
                  <p className="TextInteractiveTwo">Disfruta la casa inteligente de tus sueños</p>
                </div>
                <div className="col-md-12">
                  <p className="SpacingIconInteractive">
                    <img className="IconImageIntereactive" src={cil_audio} alt="audio" /> Smart Devices en tu casa integrados
                  </p>
                </div>
                <div className="col-md-12">
                  <p className="SpacingIconInteractive">
                    <img className="IconImageIntereactive" src={cil_bed} alt="bed" /> Habitaciones totalmente acondicionadas
                  </p>
                </div>
                <div className="col-md-12">
                  <p className="SpacingIconInteractive">
                    <img className="IconImageIntereactive" src={cil_door} alt="door" /> Cerraduras inteligentes en los accesos de la casa
                  </p>
                </div>
                <div className="col-md-12">
                  <p className="SpacingIconInteractive">
                    <img className="IconImageIntereactive" src={cil_tv} alt="tv" /> Dispositivos inteligentes completamente personalizables
                  </p>
                </div>
                <div className="col-md-12">
                  <p className="SpacingIconInteractive">
                    <img className="IconImageIntereactive" src={cil_garage} alt="garage" /> Espacios de estacionamiento
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <img src={imageName} alt="houseInt" className="img-fluid"/>
            </div>
            <div className="col-md-12">
              <p><button type="button" className="btn btn-lg btn-info rounded-pill" onClick={this.changeViewHouse}>Info</button></p>
              {/* <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                <label className="custom-control-label" for="customSwitch1"></label>
              </div> */}
            </div>
            <div className="col-md-12">
              <p className="slideDow">desliza hacia abajo</p>
            </div>

          </div>
          
        </div>
      </div>
    );
  }
}

export default InteractiveHouse;