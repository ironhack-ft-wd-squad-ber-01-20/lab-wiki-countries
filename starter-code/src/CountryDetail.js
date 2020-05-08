import React from 'react'
import countries from './countries.json'

import { Link } from 'react-router-dom';

const CountryDetail =(props)=>{
 /*   console.log(props)
    return (<div></div>)
}*/
  const countryId=props.match.params.cca3;

    const country= countries.find(coun=>{
        return coun.cca3 === countryId;
    })
    console.log(country);


    return(
      
<div className="countrydetail">


 <h2>{country.name.official}</h2>
    <p>Capital    {country.capital}</p>
    <hr></hr>
    <p>Area       {country.area} km ^2</p>
    <hr></hr>
    <p>Borders </p>
    <ul>
    {country.borders.map((eachBorderCountry)=>{
        return(
<li>
<Link className="link"  to={`/countrydetail/${eachBorderCountry}`}>{eachBorderCountry}</Link>
</li>
        )
    })
    }
            
   </ul>
</div>
    )
}


export default CountryDetail;