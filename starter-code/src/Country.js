import React from "react";
import { data } from "./App";
import { Link } from "react-router-dom";


const Country = (props) => {
    const countryId = props.match.params.id;
    console.log(countryId)
    const country = data.find(el => {
        return el.cca3 === countryId;
      });
  return (
    <div className="col-7">
    <h1>{ country.name.common }</h1>
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style={{width: '30%'}}>Capital</td>
          <td>{ country.capital }</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{ country.area } km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
            {country.borders.map(n => {
                const name = data.find(el => {
                    return el.cca3 === n;
                }).name.common;
                return (
                    <li key={n}><Link to={`/${n}`}>{name}</Link></li>
                )
            })}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default Country;
