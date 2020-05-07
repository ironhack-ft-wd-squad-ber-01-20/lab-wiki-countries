import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

const CountriesList = () => (
  <div className="list-group">
    {countries.map((x) => (
      <div key={x.cca3} className="list-group-item list-group-item-action">
        <Link to={`/${x.cca3}`}>
          {x.flag}
          {x.name.common}
        </Link>
      </div>
    ))}
  </div>
);

export default CountriesList;
