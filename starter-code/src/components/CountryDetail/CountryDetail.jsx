import React from "react";
import CountriesList from "../CountriesList/CountriesList";
import { Link } from "react-router-dom";
import countries from "../../countries";

const findCountryByCode = (countryCode) =>
  countries.find((country) => country.cca3 === countryCode);

export default function CountryDetail(props) {
  const countryCode = props.match.params.id;
  const country = findCountryByCode(countryCode);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((code) => {
                  return (
                    <li key={code}>{findCountryByCode(code).name.common}</li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
