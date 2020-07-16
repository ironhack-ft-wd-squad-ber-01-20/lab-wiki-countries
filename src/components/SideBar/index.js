import React from 'react'
import { Link } from "react-router-dom";
import './style.css'

export default function index({ countries }) {

    return (
        <>
            <div className="sidebar">
                <h3 className="w3-bar-item">Menu</h3>
                {countries && countries.map((country) => {
                    return (<Link key={country.id} to={`/country/${country?.cca3}`}>{country?.name?.common}</Link>)
                })}
            </div>
        </>
    )
}
