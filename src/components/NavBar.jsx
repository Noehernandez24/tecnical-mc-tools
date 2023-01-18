import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <h1 className="nav-title">TMT</h1>
      <div className="nav-links">
        <Link className="nav-link nav-link--home" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/travel-portals">
          Travel Portals
        </Link>
        <Link className="nav-link" to="/items-calculator">
          Items to stacks
        </Link>
        <Link className="nav-link" to="#">
          Locate chunks
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
