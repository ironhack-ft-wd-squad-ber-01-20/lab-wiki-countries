import React from "react";
import { Link } from "react-router-dom";

const CountryRow = props => {
  return (
    <div>
      <Link
        className="list-group-item list-group-item-action"
        to={`/countries/${props.country.name.official}`}
      >
        {props.country.flag} {props.country.name.common}
      </Link>
    </div>
  );
};

export default CountryRow;
