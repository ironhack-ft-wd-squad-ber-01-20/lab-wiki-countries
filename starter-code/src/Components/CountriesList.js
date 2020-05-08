import React from 'react';
//add Link import; need to install npm router package
import { Link } from 'react-router-dom'
import dataJson from '../countries.json'

const countriesAll = dataJson;

//render function in class component is the fuction in the function component XD
//no need for "this" in functional component, only need for class
//if data is from the parent, props is from the parent; syntex is: "props.xxx" whre xxx is taken from what defined in parents

function CountriesList() {
  const countriesList = countriesAll.map((country, index) => {
    return (
      <Link
        key={index}
        to={`/${country.cca3}`}
        class="list-group-item list-group-item-action"
      >
        {country.flag} {country.name.common}
      </Link>
    );
});
  return (
    // jsx seems doesn't like "-" so remove "-" from max-height
    <div class="col-5" style={{maxHeight: "90vh", overflow:"scroll"}}>
        <div class="list-group">
          {countriesList}
        </div>
    </div>
    
  );
}

export default CountriesList;