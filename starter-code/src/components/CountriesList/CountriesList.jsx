import React from "react";
import { Link } from "react-router-dom";
import countries from "../../countries";

export default function CountriesList(props) {
  //return <h1>CountriesList</h1>;
  return (
    <div className="list-group">
      {countries.map((country) => {
        return (
          <Link
            to={`/countries/${country.cca3}`}
            className="list-group-item list-group-item-action"
            key={country.cca3}
          >
            {country.flag} {country.name.common}
          </Link>
        );
      })}
    </div>
  );
}
