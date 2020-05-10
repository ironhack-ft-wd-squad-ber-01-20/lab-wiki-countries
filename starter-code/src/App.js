import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import countries from "./countries.json";

import CountryDetail from "./CountryDetail";

class App extends Component {
  render() {
    const sortedCountryList = countries.sort((a, b) => {
      return a.name.common.localeCompare(b.name.common);
    });

    const countryList = sortedCountryList.map((country) => {
      return (
        <Link
          key={country.cca3}
          className="list-group-item list-group-item-action"
          to={`/${country.cca3}`}
        >
          {country.name.common}
        </Link>
      );
    });

    return (
      <div id="root">
        <div>
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
                style={{ maxHeight: "90vh", overflow: "scroll" }}
              >
                <div className="list-group">{countryList}</div>
              </div>
              <Switch>
                <Route exact path="/:id" component={CountryDetail} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
