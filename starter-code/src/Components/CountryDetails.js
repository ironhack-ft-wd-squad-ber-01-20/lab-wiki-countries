import React, { Component } from "react";
import Countries from "./Countries";
import { Link } from "react-router-dom";
import countries from "../countries.json";

const CountryDetails = (props) => {
  //getCountryCode function for re-use.

  function getCountryByCode(countryCode) {
    return countries.find((country) => {
      return country.cca3 === countryCode;
    });
  }
  const countryCode = props.match.params.id;

  const eachCountry = getCountryByCode(countryCode);

  const eachCountryBorders = eachCountry.borders.map((borderCountry) => {
    const eachBorderCountry = getCountryByCode(borderCountry);
    return (
      <ul>
        <li>
          <Link to={`/${eachBorderCountry.cca3}`}>
            {eachBorderCountry.name.common}
          </Link>
        </li>
      </ul>
    );
  });

  return (
    <div class="col-7">
      <h1>{eachCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{eachCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {eachCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>{eachCountryBorders}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
