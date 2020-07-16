import React from 'react';
import './App.css';
import data from './countries.json'
import { Link, Route } from 'react-router-dom';
import Country from './Country';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
              {data.map(c => {
                return (
                  <div className="list-group-item list-group-item-action" key={c.cca3}>
                    <Link to={`/${c.cca3}`}>{c.name.common}</Link>
                  </div>
                )
              })}
            </div>
          </div>
          <Route exact path="/:id" component={Country} />
        </div>
      </div>
    </div>
  );
}

export { App, data };
