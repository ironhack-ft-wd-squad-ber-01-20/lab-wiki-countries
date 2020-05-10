import React, { Component } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";
const Countries = () => {
  const countriesMap = countries.map((country, index) => {
    return (
      <div class="container">
        <div class="row">
          <div class="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div class="list-group">
              <Link
                class="list-group-item list-group-item-action"
                key={index}
                to={`/${country.cca3}`}
              >
                {country.flag} {country.name.common}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return countriesMap;
};

export default Countries;
