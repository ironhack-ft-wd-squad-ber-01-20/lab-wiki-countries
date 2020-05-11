import React from "react";
import CountriesDB from "../countries.json";
import { Link } from "react-router-dom";

export const myCountries = CountriesDB;

export const Countries = () => {
  return (
    <div>
      {myCountries.map((country) => {
        return (
          <table>
            <thead>
              <tr>
                <h3>
                  <Link to={`/countries/${country.cca3}`}>
                    Country:{country.name.official}{" "}
                  </Link>
                  <span role="img" />
                  {country.flag}{" "}
                </h3>
              </tr>
            </thead>
          </table>
        );
      })}
    </div>
  );
};
