import React from "react";
import { Link } from "react-router-dom";
import countries from "./countries.json";

export default function CountryDetail(props) {
  const id = props.match.params.id;
  const countryFound = (id) => {
    return countries.find((country) => {
      return id === country.cca3;
    });
  };

  const borders = countryFound(id).borders.map((countryId) => {
    return (
      <li key={countryId}>
        <Link to={`/${countryId}`}>{countryFound(countryId).name.common}</Link>
      </li>
    );
  });

  return (
    <div>
      <h1>{countryFound(id).name.common}</h1>
      <p>Borders:</p>
      <ul>{borders.length < 1 ? <li>No borders left alive</li> : borders}</ul>
    </div>
  );
}
