import React, { Component } from 'react';
import cil_bed from '../assets/images/interactive_house/cil_bed.png';
import cil_couch from '../assets/images/interactive_house/cil_couch.png';
import cil_door from '../assets/images/interactive_house/cil_door.png';
import cil_garage from '../assets/images/interactive_house/cil_garage.png';
import cil_tv from '../assets/images/interactive_house/cil_tv.png';
import house_int1 from '../assets/images/interactive_house/exer-romero-render-night-final 1.png';

class InteractiveHouse extends Component{
  render() {
    return (    
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="row">
            <div class="col-md-12">
                Disfruta la casa inteligente de tus sueños
              </div>
              <div class="col-md-12">
              <img src={cil_couch} />
              </div>
              <div class="col-md-12">
              <img src={cil_bed} />
              </div>
              <div class="col-md-12">
              <img src={cil_door} />
              </div>
              <div class="col-md-12">
              <img src={cil_tv} />
              </div>
              <div class="col-md-12">
              <img src={cil_garage} />
              </div>
            </div>
          </div>
          <div class="col-md-7">
          <img src={house_int1} />
          </div>
        </div>
      </div>
    );
  }
}

export default InteractiveHouse;