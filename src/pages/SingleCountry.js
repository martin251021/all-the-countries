import {Link, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import { useApp, useAppUpdate } from "../context/AppContext";
import axios from "axios";

export default function SingleCountry() {
    const {countryId} = useParams()

    const [loading, setLoading] = useState(true)
    const [country, setCountry] = useState(null)
    
    useEffect(() => {
        const fetchCountry = async() => {
            try{
                setLoading(true)
                const response = await axios(`https://restcountries.com/v3.1/alpha/${countryId}`)
                setCountry(...response.data)
                setLoading(false)
            } catch(err) {
                console.log(err)
            }
        }
        fetchCountry()
    }, [])

    return(
        
        <div>
            {loading? <h1>Loading...</h1> : <div>
                             <h1 className="modal-country-name">{country.name.common}</h1>
                <h4>{country.name.official ? `Official name: ${country.name.official}` : ""}</h4>
                <p>{country.capital ? `Capital city: ${country.capital[0]}` : "No capital city"}</p>
                <p>{country.subregion ? `Region: ${country.region} - ${country.subregion}` : `${country.region}`}</p>
                <p>Area: {country.area.toLocaleString("en-US")} km²</p>
                <p>Population: {country.population.toLocaleString("en-US")}</p>
                <p>Population density: {Math.floor(country.population/country.area)}/km²</p>
                <a href={country.maps.googleMaps} target="_blank">Google Maps</a>
                </div>}
        </div>
    )
}