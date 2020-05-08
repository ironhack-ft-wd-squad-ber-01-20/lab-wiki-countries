import React from 'react';
import './App.css';
import countries from './countries.json'
import CountryDetail from './CountryDetail';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

function App() { 

  return (
    <div className="Apppage">
    <div className="App">
 <h1>WikiCountries</h1>
 <ul style={{
   listStyleType:'none'
 }}> 
{countries.map((country) => {
return(
  <li key={country.cca3} >
 <Link className="link" to={`/countrydetail/${country.cca3}`}> {country.name.official}</Link>
</li>
)
}
)}
 </ul>

</div>
<Switch>
  <Route exact path="/countrydetail/:cca3" component={CountryDetail}/>
</Switch>
    </div>
  );
}

export default App;

