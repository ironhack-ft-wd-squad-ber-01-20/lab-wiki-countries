import React from "react";
import { Link } from "react-router-dom";

const CountryDetails = props => {
  const tdStyle = {
    width: "30%"
  };

  return (
    <React.Fragment>
      <h1>{props.country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Capital</td>
            <td>{props.country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {props.country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {props.borderCountries &&
                  props.borderCountries.map(borderCountry => {
                    return (
                      <li key={borderCountry.name.official}>
                        <Link to={`/countries/${borderCountry.name.official}`}>
                          {borderCountry.name.common}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default CountryDetails;
