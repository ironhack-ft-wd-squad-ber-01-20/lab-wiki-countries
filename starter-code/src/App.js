// App.js

import React, { Component } from "react";
import "./App.css";
import { Countries } from "./components/Countries";
import { Switch, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails.js";

class App extends Component {
  render() {
    return (
      <div className="App">
      <th>
      <Countries />
      </th>
      <th>
      <Switch>
          <Route exact path="/countries/:cca3" component={CountryDetails} />
          <Route exact path="/countries" component={Countries} />
        </Switch>

      </th>
        
      </div>
    );
  }
}

export default App;
