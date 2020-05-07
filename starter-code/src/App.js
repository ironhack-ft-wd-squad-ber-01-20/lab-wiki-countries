import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import CountryDetail from "./components/CountryDetail";
import { Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{
                maxHeight: "90vh",
                overflow: "scroll",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {countries.map((country) => {
                return (
                  <Link to={`/${country.cca3}`} key={country.cca3}>
                    {country.flag} {country.name.common}
                  </Link>
                );
              })}
            </div>
            <Route exact path="/:id" component={CountryDetail} />
          </div>
        </div>
      </div>
    );
  }
}
