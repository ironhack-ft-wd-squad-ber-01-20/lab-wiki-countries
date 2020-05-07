import React from "react";
import logo from "./logo.svg";
import CountryDetail from "./Components/CountryDetail";
import CountriesList from "./Components/CountriesList";
import { Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: "40vh" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>WikiCountries</p>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <CountriesList />
            </div>
            <Route exact path="/:cca3" component={CountryDetail} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
