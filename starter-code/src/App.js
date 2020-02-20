import { Link, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import countriesJSON from "./countries.json";

class Countries extends Component {
  render() {
    return (
      <div>
        <div class="countrylist">
          <h4>countries list</h4>

          {this.props.countries.map((item, index) => {
            return (
              <div key={index} class="row">
                <Link to={`/country/${item.cca3}`}>{item.name.official}</Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

class CountryDetail extends Component {
  render() {
    //console.log(this.props);
    const cca3 = this.props.match.params.id;
    const foundCountry = countriesJSON.find(country => {
      return country.cca3 === cca3;
      console.log();
    });

    return (
      <div>
        <div class="card">
          <div class="card-header">{foundCountry.name.official}</div>
          <div class="card-body">
            <h5 class="card-title">{foundCountry.name.common}</h5>
            <p class="card-text">Capital: {foundCountry.capital}</p>
            <p class="card-text">Area: {Math.floor(foundCountry.area)} km²</p>
            <p class="card-text">Borders: {(foundCountry.borders)}</p>

            {/* {this.foundCountry.borders.map((item, index) => {
              const borderCountry = countriesJSON.find(country => {

                reutrn country.cca3 === countries;
              });
            
            return (
              <div key={index} class="row">
                <Link to={`/border/${item.cca3}`}>{foundCountry.borders}</Link>
              </div>
            
            );
          })} */}
          </div>
        </div>
      </div>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Countries - Ironhack Lab
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
        </div>
      </nav>
    );
  }
}

export default class App extends Component {
  state = { countriesData: countriesJSON };

  render() {
    return (
      <div className="App">
        <Navigation />

        <div class="container">
          <Countries countries={this.state.countriesData} />
          <Route path="/country/:id" component={CountryDetail} />
        </div>
      </div>
    );
  }
}
