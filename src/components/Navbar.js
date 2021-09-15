import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand in-button ">
          <img id="logo" alt="logo" src={logo}></img>
        </NavLink>
        <button
          className="navbar-toggler out-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              to="/projects"
              className={(isActive) =>
                "nav-link" + (!isActive ? " out-button" : " in-button")
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={(isActive) =>
                "nav-link" + (!isActive ? " out-button" : " in-button")
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={(isActive) =>
                "nav-link" + (!isActive ? " out-button" : " in-button")
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;