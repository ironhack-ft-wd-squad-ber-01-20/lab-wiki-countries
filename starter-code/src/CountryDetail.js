import React from 'react';
import countries from "./countries.json"
import { Link } from 'react-router-dom';


const CountryDetail = props => {
 const countryId = props.match.params.id;
  const country = countries.find(country => {
    return country.cca3 === countryId;
  })
  const findById = (id) => {
  return countries.find(country => {
    return country.cca3 === id;
  })
  }

  return (
    <div>
   <h1>{country.name.common}</h1>
   <p>Capital : {country.capital}</p>
   <p>Area : {country.area}</p>
    <ul>
   { country.borders.map((country) =>{
    let border = findById(country)
    console.log(border)
   return  <li key = {border.cca3}>{border.name.common}</li>
   })
    }
    </ul>
   </div>
 

  );
};

export default CountryDetail;