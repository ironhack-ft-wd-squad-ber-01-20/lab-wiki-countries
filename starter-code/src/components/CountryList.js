import React from "react";
import CountryRow from "./CountryRow";

const CountryList = props => {
  return (
    <div className="list-group">
      {props.countries.map(country => {
        return <CountryRow country={country} key={country.name.official} />;
      })}
    </div>
  );
};

export default CountryList;
