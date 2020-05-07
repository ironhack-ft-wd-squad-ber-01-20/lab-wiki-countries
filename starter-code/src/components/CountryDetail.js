import React from "react";
import countries from ".././countries.json";
import { Link } from "react-router-dom";

export default function CountryDetail(props) {
  const countryId = props.match.params.id;
  const country = countries.find((country) => {
    return country.cca3 === countryId;
  });
  console.log(country);
  return (
    <div className="col-7">
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
              {country.area}km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((borderCountryId) => {
                  let border = countries.find((country) => {
                    return country.cca3 === borderCountryId;
                  });
                  return (
                    <li key={border.cca3}>
                      <Link to={`/${border.cca3}`}>{border.name.common}</Link>
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
}
