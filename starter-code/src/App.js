import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import countryData from "./countries.json";

const Countries = () => {
  let countryLinks = countryData.map(country => {
    return (
      <div className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to={country.cca3}
        >
          {country.flag}
          {country.name.official}
        </Link>
      </div>
    );
  });
  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      {countryLinks}
    </div>
  );
};

const CountryDetails = props => {
  const { cca3 } = props.match.params;
  const country = countryData.find(country => {
    return country.cca3 === cca3;
  });
  return (
    <div className="col-7">
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area}km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(border => {
                  const con = countryData.find(country => {
                    return country.cca3 === border;
                  });
                  return (
                    <li>
                      <Link to={`/${border}`}>{con.name.common}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <div class="container">
        <div className="row">
          <Route path="/" component={Countries} />
          <Route path="/:cca3" component={CountryDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
