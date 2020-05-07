import React from "react";
import countries from "../countries.json";
import Borders from "./Borders";
const CountryDetail = (props) => {
  const country = countries.find(
    (country) => country.cca3 === props.match.params.cca3
  );
  return (
    <div className="col-7">
      <h1>
        {country.flag} {country.name.official}
      </h1>
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
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <Borders country={country} />
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
