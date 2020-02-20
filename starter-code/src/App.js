import React from "react";
import "./App.css";
import countries from "./countries.json";
import { Link, Route } from "react-router-dom";

function App() {
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
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <div className="list-group">
              {countries.map(country => {
                return (
                  <Link
                    key={country.cca3}
                    className="list-group-item list-group-item-action"
                    to={"/" + country.cca3}
                  >
                    {country.name.official}
                    {country.flag}
                  </Link>
                );
              })}
            </div>
          </div>
          <Route path="/:country" component={CountryDetail} />
        </div>
      </div>
    </div>
  );
}

function CountryDetail(props) {
  const cca3 = props.match.params.country;

  const countryToRender = countries.find(country => {
    return country.cca3 === cca3;
  });
  console.log(countryToRender);
  return (
    <div className="col-7">
      <h1>{countryToRender.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{countryToRender.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryToRender.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryToRender.borders.map(countryCode => {
                  const countryToshow = countries.find(country => {
                    return country.cca3 === countryCode;
                  });
                  return (
                    <li>
                      <Link to={"/" + countryToshow.cca3}>
                        {countryToshow.name.official}
                        {console.log("yo")}
                      </Link>
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
}
export default App;
