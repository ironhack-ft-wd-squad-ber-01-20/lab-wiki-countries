import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import countriesData from "./countries.json";

const Navbar = () => {
  return (
    <nav>
      <h1> WikiCountries</h1>
    </nav>
  );
};

const CountryList = props => {
  console.log(props.countries);
  return props.countries.map(country => {
    return (
      <div className="list">
        <p Key={country.cca3}>
          <Link to={`/${country.cca3}`}>{country.name.common}</Link>
        </p>
      </div>
    );
  });
};
const CountryDetail = props => {
  const { cca3 } = props.match.params;

  const countries = countriesData.find(country => {
    return country.cca3 === cca3;
  });
  console.log(countries);
  return (
    <div className="country">
      <div>
        <div className="col-5" key={cca3}>
          <Link to={`/${cca3}`}>{countries.name.common}</Link>
        </div>

        <h1>{countries.name.common}</h1>
        <table className="col-7">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{countries.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countries.area}km<sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <Link to={"/:cca3"}>{countries.borders}</Link>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />

      <CountryList countries={countriesData} />
      <Route exact path="/:cca3" component={CountryDetail} />
    </div>
  );
}

export default App;
