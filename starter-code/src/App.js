import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import countryData from "./countries.json";
import { Route } from "react-router-dom";

function App() {
  const Country = props => {
    const { officialName } = props.match.params;

    const country = countryData.find(country => {
      return country.name.official === officialName;
    });

    // create array with bordering countries
    const borderCountries = countryData.filter(border => {
      return country.borders.includes(border.cca3);
    });

    return (
      <CountryDetails country={country} borderCountries={borderCountries} />
    );
  };

  const listStyle = {
    maxHeight: "90vh",
    overflow: "scroll",
    textAlign: "left"
  };
  const detailsStyle = {
    textAlign: "left"
  };
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5" style={listStyle}>
            <CountryList countries={countryData} />
          </div>
          <div className="col-7" style={listStyle}>
            <Route exact path="/countries/:officialName" component={Country} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
