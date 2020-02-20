import React from "react";
import logo from "./logo.svg";
import "./App.css";
import countries from "./countries.json";
import { Route, Switch, NavLink, Link } from "react-router-dom";

const CountryLink = props => {
  // console.log(props.data);
  return (
    <Link
      to={"/country/" + props.data.cca3}
      className="list-group-item list-group-item-action"
    >
      {props.data.flag + " " + props.data.name.common}
    </Link>
  );
};

const CountryDetail = props => {
  const currentCountry = countries.filter(element => {
    return element.cca3 === props.match.params.id;
  })[0];

  return (
    <>
      <h1>{currentCountry.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{currentCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{currentCountry.area + " km ²"}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div className="list-group-item bg-light">Borders</div>
              {currentCountry.borders.map((country, index) => {
                const dataCountry = countries.filter(ele => {
                  return ele.cca3 === country;
                })[0];
                return <CountryLink key={index} data={dataCountry} />;
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Welcome = props => {
  return <h1>Welcome to CountryWiki</h1>;
};

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb 3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            WikiCountries
          </Link>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div
            className="list-group col-3"
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <div className="list-group-item bg-dark" style={{ color: "white" }}>
              Countries
            </div>
            {countries.map((element, index) => {
              return <CountryLink key={index} data={element} />;
            })}
          </div>
          <div className="col-9">
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/country/:id" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
