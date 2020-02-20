import React from "react";
import geoData from "./countries.json";
import { Link, Route, Switch } from "react-router-dom";

const CountryDetail = props => {
  const { cca3 } = props.match.params;
  console.log(cca3);

  const foundCountry = geoData.find(country => {
    return country.cca3 === cca3;
  });

  console.log(foundCountry);

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              {foundCountry.borders.map(countries => {
                const borderCountry = geoData.find(country => {
                  return country.cca3 === countries;
                });
                return (
                  <ul>
                    <li>
                      <Link to={`/${countries}`}>
                        {borderCountry.name.common}
                      </Link>
                    </li>
                  </ul>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
