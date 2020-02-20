import React from "react";
import { Link } from "react-router-dom";
import countries from "./countries.json";

const CountryDetail = props => {
  const { initial } = props.match.params;

  const country = countries.find(country => {
    return country.cca3 === initial;
  });
  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.name.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(border => {
                  return (
                    <li key={country.cca2}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
