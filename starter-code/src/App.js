import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import countryData from "./countries.json";
import { Link, Route } from "react-router-dom";

const Countries = () => {
  let countryLinks = countryData.map(country => {
    return (
      <div className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to={`/${country.cca3}`}
          key={country.cca3}
        >
          {/* <Link to={`/games/${game.slug}`}>{game.name}</Link> */}
          {country.flag}
          {country.name.common}
        </Link>{" "}
      </div>
    );
  });
  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      {countryLinks}
    </div>
  );
};

const CountryDetail = props => {
  const { cca3 } = props.match.params;

  const country = countryData.find(countries => {
    return countries.cca3 === cca3;
  });

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
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
                  const con = countryData.find(countries => {
                    return countries.cca3 === border;
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
          <Route path="/" component={Countries} />
          <Route path="/:cca3" component={CountryDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
