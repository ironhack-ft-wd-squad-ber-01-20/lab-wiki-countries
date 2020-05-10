import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Countries from "./Components/Countries";
import { Route, Switch } from "react-router-dom";
import CountryDetails from "./Components/CountryDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          {Countries}
        </Route>
        <Route exact path="/:id">
          {CountryDetails}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
