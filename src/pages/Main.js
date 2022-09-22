import React, { useState, useEffect } from "react";
import Country from "../components/Country";
import { FilterSearch } from "../components/FilterSearch";
import { useThemeContext } from "../context/AppContext";
import { callMeBaby } from "../services/services"

export  const Main = () => {

    const { width } = useThemeContext()
    const [countries, setCountries] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await callMeBaby("https://restcountries.com/v3.1/all")
            setCountries(result.data)
            setLoad(false)
        };
        fetchData();
    }, []);

    const countriesCallback = (values) => {
        setLoad(true)
        setCountries(values)
        setLoad(false)
    }

    const mainStyles = {
        padding: width < 650 ? "5px 1.5rem 0 1.5rem" : "5px 4rem 4rem 4rem"
    }

     return(
        <div className="main" style={mainStyles}>
            <FilterSearch countries={countries} countriesCallback={countriesCallback} />
            <div className="countries-elements">
               {load ? <h1>Loading..</h1> : 
               countries?.map((e, i) => <Country key={i} e={e} />)}                                                   
            </div>
        </div>
    )


}
