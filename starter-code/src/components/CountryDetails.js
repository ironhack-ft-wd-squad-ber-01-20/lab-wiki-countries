import React, { Component } from "react";
import { Link } from "react-router-dom";
import { myCountries } from "./Countries";

const CountryDetails = (props) => {
  console.log(props);
  const getCountry = (cca3) => {
    const theCountry = (oneCountry) => {
      return oneCountry.cca3 === cca3;
    };
    return myCountries.find(theCountry);
  };

  const { params } = props.match;
  const foundCountry = getCountry(params.cca3, 10);

  return (
    <div>
      <h2>
        {foundCountry.name.official}
      </h2>
      <h3>Area: {foundCountry.area}</h3>
      <p>{foundCountry.borders.map(borderCountry => {
          return <li><Link to={`/countries/${borderCountry}`}>{borderCountry}</Link></li>
      })}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default CountryDetails;
