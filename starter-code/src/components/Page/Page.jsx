import React, { Component } from "react";
// import CountryDetail from "./components/CountryDetail/CountryDetail";
import CountriesList from "../CountriesList/CountriesList";
import CountryDetail from "../CountryDetail/CountryDetail";
import { Route, Switch } from "react-router-dom";

import countries from "../../countries";

class Page extends Component {
  state = {
    countries: countries,
  };
  render() {
    return (
      <>
        <div id="root">
          <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <a className="navbar-brand" href="/">
                  WikiCountries
                </a>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div
                  className="col-5"
                  style={{ maxHeight: "90vh", overflow: "scroll" }}
                >
                  <CountriesList />
                </div>
                <div className="col-7">
                  <Switch>
                    <Route
                      exact
                      path="/countries/:id"
                      component={CountryDetail}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Page;
