import React from "react";
import "./styles/Home.css";
import start from "../images/img404.png";

function NotFound() {
  return (
    <div className="Home">
      <div className="Home__col">
        <img
          src={start}
          alt="Platzi Conf Logo"
          width="300px"
          height="300px"
          className="img-fluid"
        />
        <h1>404 : Not Found</h1>
      </div>
    </div>
  );
}

export default NotFound;
