import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import countries from '../../countries.json'

export default function index(props) {
    const { CountryCode } = props?.match?.params
    const [{ name, capital, area, borders }] = countries?.filter(country => country.cca3 === CountryCode)

    return (
        <div className="container" >

            <div className="title">
                <h1>{name.official}</h1>
            </div>
            <div className="">
                <p>Capital: {capital}</p>
                <p>Area: {area}</p>
                {borders.length === 0 ? <h3>No Borders</h3> :
                    <>
                        <h3>Border</h3>
                        <ul>
                            {borders.map(border => {
                                const [country] = countries?.filter(country => country.cca3 === border)
                                return (<li>
                                    <Link key={country?.id} to={`/country/${country?.cca3}`}>{country?.name?.common}</Link>
                                </li>)
                            })}
                        </ul>
                    </>
                }
            </div>

        </div>
    )
}
