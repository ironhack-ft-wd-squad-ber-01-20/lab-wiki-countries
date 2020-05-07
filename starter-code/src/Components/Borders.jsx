import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

const Borders = ({ country }) =>
  country.borders.map((x) => (
    <li key={x} className="list-group-item list-group-item-action">
      <Link to={`/${x}`}>
        {countries.find((el) => el.cca3 === x).name.official}
      </Link>
    </li>
  ));

export default Borders;
