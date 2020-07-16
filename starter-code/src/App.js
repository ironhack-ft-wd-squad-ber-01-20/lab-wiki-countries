import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import { Link, Switch, Route } from "react-router-dom";
import CountryDetail from "./CountryDetail";

export default class App extends Component {
  render() {
    const countryList = countries.map((country) => {
      return (
        <Link key={country.cca3} to={`/${country.cca3}`}>
          {country.name.common}
        </Link>
      );
    });

    return (
      <>
        <h1>WikiCountries</h1>
        <div className="display">
          <div className="countrylist">{countryList}</div>
          <div>
            <Switch>
              <Route exact path="/:id" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}
