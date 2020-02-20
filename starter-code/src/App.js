import React from "react";
import "./App.css";
import CountryCode from "./CountryCode.js";
import { Route } from "react-router-dom";
import CountryDetail from "./CountryDetail";
function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <Route path="/" component={CountryCode} />
          <Route path="/:initial" component={CountryDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
