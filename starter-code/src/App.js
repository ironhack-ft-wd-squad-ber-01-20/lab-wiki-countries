import React from "react";
import logo from "./logo.svg";
import "./App.css";
import countries from "./countries.json";
import { Link, Route, Switch } from "react-router-dom";

// let uniqueCountries = [];

// countries.map(country => {
//   if (uniqueCountries.indexOf(country.name.common) === -1) {
//     uniqueCountries.push(country.name.common);
//   }
//   return uniqueCountries;
// });

const List = () => {
  return (
    <div className="col-5">
      <div className="list-group">
        {countries.map(country => {
          return (
            <div className="list-card">
              {/* <p> */}
              <Link to={`/${country.cca3}`}>{country.name.common}</Link>
              {/* </p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CountryDetail = props => {
  // const cca3 = (props.match && props.match.params.cca3) || "";
  // console.log(props.match.params.cca3);
  const { cca3 } = props.match.params;

  // console.log("MATCH:", props.match.params);

  let country = countries.find(country => {
    console.log("test", cca3);
    return country.cca3 === cca3;
  });

  console.log(country);

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.name.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.name.area} <p>km</p>
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(el => {
                  return (
                    <li>
                      <Link to={`/${el}`}>{el}</Link>
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

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          WikiCountries
        </a>
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="App" id="bootstrap-overrides">
      {/* NAV BAR */}
      <NavBar />
      <div className="container">
        <div className="row">
          {/* LEFT-HAND CONTAINER */}
          <List />

          <Route exact path="/:cca3" component={CountryDetail} />
        </div>
      </div>
      {/* CLOSING TAG FOR ENTIRE APP DIV */}
    </div>
  );
}

export default App;
