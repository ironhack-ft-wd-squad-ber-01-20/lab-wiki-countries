import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import countries from "./countries.json";
import Navbar from "./components/Navbar";
import List from "./components/List";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <List countries={countries} />
          <Route exact path="/:cca3" component={CountryDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
