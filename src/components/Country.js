import { useApp, useAppUpdate } from "../context/AppContext";
import {Link} from "react-router-dom";

export default function Country(props) {

    const appContext = useApp()
    const appContextUpdate = useAppUpdate()

    const {lightModeActive, id, isModalActive, isOverlayActive, filteredCountries, activeFilter, activeSearch} = appContext
    const {setId, setOverlayActive, setFilteredCountries, setActiveFilter, setActiveSearch, handleClickModalShow, handleClickModalHide, handleFilterChange, handleSearchChange} = appContextUpdate

    const getId = function() {
        setId(props.e.id)
    }

    const styles = {
        backgroundColor: lightModeActive ? "white" : "rgb(84, 79, 79)",
        color: lightModeActive ? "black" : "white"
    }

    return(
        <Link to={`/${props.e.cca3}`}>
        <div
        style={styles}
        // onClick={() => {
        //   handleClickModalShow()
        //   getId()
        // } } 
        id={props.e.cca3} 
        className="country" >
            
            <img className="country-img" src={props.e.flags.png}/>
            <div className="country-data">
                <h2>{props.e.name.common}</h2>
                <h4>Population: {props.e.population.toLocaleString('en-US')}</h4>
                <h4>Region: {props.e.region}</h4>
                <h4>{props.e.capital ? `Capital city: ${props.e.capital[0]}` : "No capital city"}</h4> 
            </div>
            <h3></h3>
        </div>
       </ Link>        
    )
}