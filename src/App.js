import React from 'react';
import { Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Home from './components/Home';
import Sidebar from './components/SideBar';
import CountryDetail from './components/CountryDetail';

import countries from './countries.json'
import './App.css';

const countriesListWithIdsSorted = countries.map(country => ({
  ...country,
  id: uuidv4()
})).sort((a, b) => b.name.official - a.name.official)



function App() {
  return (
    <div className="App">
      <Sidebar countries={countriesListWithIdsSorted} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/country/:CountryCode" component={CountryDetail} />
      </Switch>
    </div>
  );
}

export default App;
