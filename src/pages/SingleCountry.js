import {Link, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import { useApp, useAppUpdate } from "../context/AppContext";
import axios from "axios";

export default function SingleCountry() {
    const {countryId} = useParams()

    const {loading} = useApp()
    const {setLoading} = useAppUpdate()

    const [country, setCountry] = useState()
    
    useEffect(() => {
        const fetchCountry = async() => {
            try{
                setLoading(true)
                const response = await axios(`https://restcountries.com/v3.1/alpha/${countryId}`)
                setCountry(response.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchCountry()
    }, [])

    return(
        <div>
            <h2>This will be single country</h2>
        </div>
    )
}