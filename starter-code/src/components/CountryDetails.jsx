import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

const CountryDetails = props => {
  console.log(props.match.params);
  console.log(countries);

  const style = {
    width: "30%"
  };

  const { cca3 } = props.match.params;

  const countryDetail = countries.find(el => {
    console.log(el);
    return el.cca3 === cca3;
  });

  return (
    <div className="col-7">
      <h1>{countryDetail.cca3}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={style}>Capital</td>
            <td>{countryDetail.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryDetail.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryDetail.borders.map(border => {
                  {
                    /* let borderName = countries.find(country => {
                    return country.cca3 === border;
                  }); */
                  }
                  return (
                    <li>
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

export default CountryDetails;
