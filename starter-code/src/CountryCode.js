import React from "react";
import { Link } from "react-router-dom";
import countries from "./countries.json";

const CountryCode = props => {
  return (
    <div className="col-5" style={{ height: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {countries.map(country => {
          return (
            <a key={country.cca2}>
              <Link
                className="list-group-item list-group-item-action "
                to={`/${country.cca3}`}
              >
                {country.name.common}
              </Link>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default CountryCode;
