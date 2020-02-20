import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";

function App() {
  return (
    <div className="App">
      <div id="root">
        <div>
          <Navbar />
          <div class="container">
            <div class="row">
              <Route path="/" component={CountryList} />
              <Route path="/:cca3" component={CountryDetail} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
