import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.svg";
import "./App.css";
import countriesJSON from "./countries.json";
import { Link, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          WikiCountries
        </Link>
      </div>
    </nav>
  );
};

const Countries = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5" style={{ maxHeight: "90vh" }}>
          <div className="list-group">
            {countriesJSON.map(country => {
              return (
                <Link
                  className="list-group-item list-group-item-action"
                  to={`/${country.cca3}`}
                >
                  {country.name.common}
                </Link>
              );
            })}
          </div>
        </div>
        <Route path="/:cca3" component={CountryDetail} />
      </div>
    </div>
  );
};

const CountryDetail = props => {
  const { cca3 } = props.match.params;
  const country = countriesJSON.find(country => {
    return country.cca3 === cca3;
  });
  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <thead></thead>
      <tbody>
        <tr>
          <td style={{ width: "30%" }}>Area</td>
          <td>
            {country.area} km<sup>2</sup>
          </td>
        </tr>
        <tr>
          <td style={{ width: "30%" }}>Borders</td>
          <td>
            <ul>
              {country.borders.map(border => {
                return (
                  <li>
                    <Link to={`/${border}`}>{border}</Link>
                  </li>
                );
              })}
            </ul>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" component={Countries} />
    </div>
  );
}

export default App;
