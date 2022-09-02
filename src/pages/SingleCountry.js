import {Link, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { useThemeContext } from "../context/AppContext";
import Error from "../components/Error";

export default function SingleCountry() {
    const {countryId} = useParams()
    const {lightModeActive, apiData, width} = useThemeContext()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [country, setCountry] = useState(null)

    const styles = {
        backgroundColor: lightModeActive ? "#f8f8f8" : "#263340",
        color: lightModeActive ? "black" : "white"
    }

    useEffect(() => {
        const fetchCountry = async() => {
            try{
                setError(false)
                setLoading(true)
                const response = await axios(`https://restcountries.com/v3.1/alpha/${countryId}`)
                setCountry(...response.data)
                setLoading(false)
            } catch(err) {
                setError(true)
                console.log(err)
            }
        }
        fetchCountry()
    }, [countryId])

    const filterByBorder = function(bordersCodes, code) {
        if(bordersCodes.includes(code)) {
            return true
        } else {
            return false
        }
    }

    const imgStyles = {
        width: width < 650 ? "15rem" : "27rem",
        height: width < 650 ? "9.5rem" : "18rem",
        marginLeft: width < 650 ? "0" : "1rem",
        marginRight: width < 650 ? "0" : "4rem"
    }

    const singleCountryStyles = {
        display: width < 650 ? "inline-block" : "flex",
        marginTop: width < 650 ? "1.5rem" : "8rem"
    }

    return(
        
        <div className="single-country-container" style={styles}>
            {loading && !error ? <h1 className="error-loading">Loading...</h1> : loading && error ? <Error /> :
            <div style={singleCountryStyles} className="single-country">
                <div className="modal-country-container">
                    <img style={imgStyles} className="modal-country-img" src={country.flags.png}></img>
                </div>
                <div className="modal-country-container">
                    <h1 className="modal-country-name">{country.name.common}</h1>
                    <h4>{country.name.official ? `Official name: ${country.name.official}` : ""}</h4>
                    <p>{country.capital ? `Capital city: ${country.capital[0]}` : "No capital city"}</p>
                    <p>{country.subregion ? `Region: ${country.region} - ${country.subregion}` : `${country.region}`}</p>
                    <p>Area: {country.area.toLocaleString("en-US")} km²</p>
                    <p>Population: {country.population.toLocaleString("en-US")}</p>
                    <p>Population density: {Math.floor(country.population/country.area)}/km²</p>
                    <a href={country.maps.googleMaps} target="_blank" style={{transition: "background-color 0.2s ease, color 0.2s ease", ...styles}}>Google Maps</a>
                    {apiData ? 
                        country.borders ?
                        <>
                            <h4>Border countries:</h4>
                            <ul className="border-country-box">
                                {
                                apiData.filter(e => filterByBorder(country.borders ? country.borders.map(e => e) : [0], e.cca3)).map((e) => 
                                        <Link key={e.cca3} style={{listStyle:"none"}} to={`/${e.cca3}`}>
                                            <li className="border-country-item"
                                                style={{...styles, boxShadow: lightModeActive? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "0 1px 3px #BECCCC"}}>
                                                {e.name.common}
                                            </li>
                                        </Link>
                                    )
                                }
                            </ul>
                        </> : <h4>No neighbouring countries</h4> : <h4>Loading...</h4>
                        }
                </div>
            </div>}
        </div>
    )
}