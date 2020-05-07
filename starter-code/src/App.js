import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './CountryDetail';
import NavBar from './NavBar';
import countriesJSON from "./countries.json";
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';


function App() {

  const Countries = () => {
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
                    {country.flag} {country.name.common}
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

  return (
    <div className="App">
    <NavBar />
      <Route path="/" component={Countries} />
    </div>
  );
}

export default App;
