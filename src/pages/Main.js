import React from "react";
import Country from "../components/Country";
import FilterSearch from "../components/FilterSearch";
import { useApp} from "../context/AppContext";


export default function Main() {

    const appContext = useApp()
    const { filteredCountries, loading} = appContext

     return(
        <div className="main">
            <FilterSearch />
            <div className="countries-elements" >
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