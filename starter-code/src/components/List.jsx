import React from "react";
import { Link } from "react-router-dom";

const List = props => {
  const style = {
    maxHeight: "90vh",
    overflow: "scroll"
  };

  return (
    <div className="col-5" style={style}>
      <div className="list-group">
        {props.countries.map((country, index) => {
          return (
            <Link
              to={`/${country.cca3}`}
              className="list-group-item list-group-item-action"
              key={index}
            >
              {country.flag} {country.name.official}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default List;
