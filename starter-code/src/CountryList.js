import React, { Component } from "react";
import geoData from "./countries.json";
import { Link, Route, Switch } from "react-router-dom";

class CountryList extends Component {
  render() {
    console.log(geoData[0].name.common);

    const countries = geoData.map(country => {
      return (
        <Link
          key={country.cca3}
          className="list-group-item list-group-item-action"
          to={country.cca3}
        >
          {country.flag} {country.name.common}
        </Link>
      );
    });

    return (
      <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <div className="list-group">{countries}</div>
      </div>
    );
  }
}

export default CountryList;
