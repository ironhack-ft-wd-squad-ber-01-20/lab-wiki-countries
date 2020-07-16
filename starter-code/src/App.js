import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from "react-router-dom";

import countries from "./countries.json";

import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";

const App = () => {
  // console.log(countries)

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row flex">
          <div className="list">
            {countries.map((country) => {
              return (
                <CountryList
                  country={country}
                  key={uuidv4()} // adding the key as it maps through the data
                  countries={countries}
                />
              );
            })}
          </div>
          <Switch>
            <Route exact path="/countries/:id" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export { App, countries };
