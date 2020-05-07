import React from 'react';
import logo from './logo.svg';
import './App.css';
import countries from "./countries.json"
import CountryDetail from "./CountryDetail.js"
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  
  return (
    <div>
  <div className="App">
  <div className="list-group">
    <ul>
          {countries.map((country) => {
            return (
              <li key={country.cca3}>
                <Link to={`/${country.cca3}`}>
                  {country.flag} {country.name.official}
                </Link>
              </li>
            );
          })}
        </ul>
    </div>  

    </div>
    <Switch>
        <Route exact path="/:id" component={CountryDetail} />
    </Switch>
  </div>
  );
}

export default App ;
