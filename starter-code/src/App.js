import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import countryData from "./countries.json";

const NavBar = () => {
  return (
    <nav>
      <h1>Wiki Countries</h1>
      <h2>
        <Link to="/">Home</Link>
      </h2>
    </nav>
  );
};

const Home = () => {
  return countryData.map(country => {
    return (
      <p key={country.cca3}>
        <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
      </p>
    );
  });
};

const CountryDetail = props => {
  const { cca3 } = props.match.params;
  console.log(cca3);

  let country = countryData.find(country => {
    return country.cca3 === cca3;
  });

  return (
    <div>
      <br />
      <h3>{country.name.common}</h3>
      <p>Captital: {country.capital}</p>
      <p>Area: {country.area} km2</p>
      <ul>Borders:</ul>
      {country.borders.map(cca3 => {
        let newCountry = countryData.find(country => {
          return country.cca3 === cca3;
        });
        console.log(newCountry);
        return (
          <li key={cca3}>
            <Link to={`/country/${cca3}`}>{newCountry.name.common}</Link>
          </li>
        );
      })}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/country/:cca3" component={CountryDetail} />
      </Switch>
    </div>
  );
}

export default App;
