import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import platziConf from "../images/platziconf-logo.svg";
import austronauta from "../images/astronauts.svg";

class HomePage extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__col">
          <img src={platziConf} alt="Platzi Conf Logo" className="img-fluid" />

          <h1>PRINT YOUR BADGES</h1>
          <p> The easiest way to manage your conference</p>
          <Link className="btn btn-primary mx-auto " to="/badges">
            Start now
          </Link>
        </div>

        <div className="Home__col">
          <img src={austronauta} alt="Astronauts" className="img-fluid" />
        </div>
      </div>
    );
  }
}

export default HomePage;
