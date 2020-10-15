import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import video_bg from "../assets/images/Hero-arqios.mp4";
import { video } from "react-bootstrap";

function Header() {
  return (
    <header className="App-header">
      <NavbarComponent />
      <div className="overlay"></div>
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src='https://s3.us-east-2.amazonaws.com/web.site/assets/images/Hero-arqios.mp4' type="video/mp4"></source>
      </video>

      <div className="container h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <h1>Tu futura casa es inteligente</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
