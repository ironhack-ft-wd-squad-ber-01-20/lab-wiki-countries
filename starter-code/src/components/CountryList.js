import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Link } from "react-router-dom";

const CountryList = (props) => {

  const style = {
    maxHeight: "90vh",
    overflow: "scroll",
    textAlign: "left",
  };

  return (
    <div style={style}>
      <Link to={`/countries/${props.country.cca3}`}>
        {props.country.flag} {props.country.name.common}
      </Link>
    </div>
  );
};

export default CountryList;
