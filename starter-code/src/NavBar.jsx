import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            WikiCountries
          </Link>
        </div>
      </nav>
    );
  };

  export default NavBar;
