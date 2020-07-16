import React from 'react'
import { Link } from "react-router-dom";
import './style.css'

export default function index({ countries }) {

    return (
        <>
            <div className="sidebar">
                {countries && countries.map((country) => {
                    return (<Link className="country-link-container" key={country.id} to={`/country/${country?.cca3}`}>
                        <img src={`https://www.countryflags.io/${country?.cca2}/flat/64.png`} alt="" />
                        <span>
                            {country?.name?.common}
                        </span>
                    </Link>)
                })}
            </div>
        </>
    )
}
