import React from "react";
import "../CarWidget/CarWidget.js";
import CarWidget from "../CarWidget/CarWidget.js";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="menu-container">
      <div className="nav-logo">
        <a Classname="nav-link" href="#">
          Phietas Store
        </a>
      </div>
      <ul className="nav-list">
        <li>
          <a className="nav-list" href="#">
            Periféricos
          </a>
        </li>
        <li>
          <a className="nav-list" href="#">
            contacto
          </a>
        </li>
        <li>
          <a className="nav-list" href="#">
            Ofertas
          </a>
        </li>
        <li>
          <CarWidget />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;