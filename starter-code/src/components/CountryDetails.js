import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { countries } from "../App";

import { Link } from "react-router-dom";

const CountryDetails = (props) => {

  const id = props.match.params.id;
  const country = countries.find((el) => {
    return el.cca3 === id;
  });

  const borders = country.borders.map(cc3a => {
    return (
      <li>
        <Link to={`/countries/${cc3a}`}>{cc3a}</Link>
       </li>
    );
  });

  console.log(country.borders);
  // console.log('ahsgahsbahsb')

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}m2</p>
      <p>Borders:</p>
      {borders}
    </div>
  );
};

export default CountryDetails;
