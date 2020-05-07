import React from 'react';
import { Link } from "react-router-dom";
import countriesJSON from "./countries.json";

const CountryDetails = (props) => {
    console.log(props.match.params.cca3)
    const oneCountry = countriesJSON.find(country => {
        return country.cca3 === props.match.params.cca3;
    })
   console.log(oneCountry.name.common)
    return (
        <div className="container">
        <h1>{oneCountry.name.common}</h1>
            <span>Capital: </span><span>{oneCountry.capital}</span><br/>
            <span>Area: </span><span>{oneCountry.area}</span><br/>
            <ul>
                {oneCountry.borders.map(countryCCA3 => {
                    let borderCountries = countriesJSON.find((country) => {
                        return country.cca3 === countryCCA3;
                    });
                    return(
                        <li>
                        <Link to={`/${borderCountries.cca3}`}>{borderCountries.name.common}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
  };

  export default CountryDetails;
