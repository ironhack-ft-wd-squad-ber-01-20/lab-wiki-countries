import React, { Component } from "react";
import { Link } from "react-router-dom";

import countries from "./countries.json";

import "bootstrap/dist/css/bootstrap.css";

class CountryDetail extends Component {
  render() {
    const { id } = this.props.match.params;

    const foundCountry = (cca3) =>
      countries.find((country) => cca3 === country.cca3);

    const borders = foundCountry(id).borders.map((code) => {
      return (
        <li key={code}>
          <Link to={`/${code}`}>{foundCountry(code).name.common}</Link>
        </li>
      );
    });

    return (
      <div className="col-7">
        <h1>{foundCountry(id).name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{foundCountry(id).capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry(id).area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borders.length < 1 && <li>No Borders</li>}
                  {borders}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
