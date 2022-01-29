import React from "react";
import NavLogo from '../Images/NavLogo.jpg'

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top ">
  <div className="container-fluid">
    <Link className="navbar-brand black-white" to="/"><img className="NavLogo" src={NavLogo} alt="Jm" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon p-4 " ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link black-white active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link black-white" to="/LadiesItem">LadiesItems</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link black-white" to="/JensItems">JensItems</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link black-white " to="/Contact">Contact</Link>
        </li>
        <button className="btn btn-danger">Buy Now</button>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;