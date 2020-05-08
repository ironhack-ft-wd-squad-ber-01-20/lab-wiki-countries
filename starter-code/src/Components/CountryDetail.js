import React from 'react';
import { Link } from 'react-router-dom';
import dataJson from '../countries.json'

const countriesAll = dataJson;

function CountryDetail(props) {
  
  //getCountryByCode is a function we can use in multiple places
  const getCountryByCode = countryCode => countriesAll.find(element => element.cca3 === countryCode);

  const foundCountry = getCountryByCode(props.match.params.id);
  //"..." to make a copy of the country object return from getCountryByCode, to avoid data being mutated
  const countryCopy = {...foundCountry};
  //use this "country" const to refer in the return template below

  const borderCountries = countryCopy.borders.map((borderCountryCode) => { 

    const foundBorderCountry = getCountryByCode(borderCountryCode);
    const borderCountryCopy = {...foundBorderCountry}
    return (
      <li>
        <Link
          key={borderCountryCopy.cca3}
          to={`/${borderCountryCopy.cca3}`}
        >
          {borderCountryCopy.name.common}
        </Link>
      </li>
    )
  })

  return (

        <div class="col-7">
            <h1>{countryCopy.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{countryCopy.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{countryCopy.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                       {borderCountries}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  );
}

export default CountryDetail;