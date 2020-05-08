import React from 'react';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetail from './Components/CountryDetail';
import { Route, Switch } from "react-router-dom";
import './App.css';



function App() {
  return (
    <div className="App">

      <header>
        <Navbar />
      </header>

      <div class="container">
          <div class="row">
            <CountriesList
            />
        <Switch>
          <Route exact path="/:id" component={CountryDetail} />
        </Switch> 

        </div>
      </div>
    </div>
  );
}

export default App;
