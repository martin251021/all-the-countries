import React from "react";
import Country from "../components/Country";
import FilterSearch from "../components/FilterSearch";
import { useApp} from "../context/AppContext";


export default function Main() {

    const appContext = useApp()
    const {filteredCountries, loading, width} = appContext

    const mainStyles = {
        padding: width < 650 ? "1rem 1.5rem 0 1.5rem" : "2rem 4rem 4rem 4rem"
    }

    const countriesElmStyles = {
        display: width < 650 ? "block" : "flex"
    }

     return(
        <div className="main" style={mainStyles}>
            <FilterSearch />
            <div className="countries-elements" style={countriesElmStyles}>
               {loading? <h1>Loading..</h1> : 
               filteredCountries.map((e, i) => {
                     return(
                            <Country
                                key={i+1}
                                e={e}
                                    />
                                        )
                            })}                                                   

            </div>
        </div>
    )


}