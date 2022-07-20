import Neighbour from "./Neighbour"
import React, { useState } from "react"
import { useApp, useAppUpdate } from "../context/AppContext";

export default function Modal(props) {

    const appContext = useApp()
    const appContextUpdate = useAppUpdate()

    const {lightModeActive, id, isModalActive, isOverlayActive, filteredCountries, activeFilter, activeSearch} = appContext
    const {setId, setModalActive, setOverlayActive, setFilteredCountries, setActiveFilter, setActiveSearch, handleClickModalShow, handleClickModalHide, handleFilterChange, handleSearchChange} = appContextUpdate

    const [width, setWindowWidth] = useState(0)

    const bordersCodes = props.country.borders ? props.country.borders.map(e => e) : [0]
    const filterByBorder = function(code) {
        if(bordersCodes.includes(code)) {
            return true
        } else {
            return false
        }
    }

    const styles = {
        backgroundColor: lightModeActive ? "white" : "#636363",
        color: lightModeActive ? "black" : "white",
        flexDirection: width < 1232 ? "column" : "row",
        fontSize: width < 1232 ? "10px" : "16px"
    }

    const imgStyle = {
        width: width < 1232 ? "12rem" : "18rem",
        height: width < 1232 ? "8rem" : "12rem"
    }

    const borderObjects = props.countriesAll.filter(e => filterByBorder(e.cca3))

    const borderElements = borderObjects.map(e => {
        return(
            <Neighbour
                key={e.id} 
                e={e}
                width={width}
                
            />
        )
    })

    React.useEffect(() => { 

        updateDimensions();
   
        window.addEventListener("resize", updateDimensions);
        return () => 
          window.removeEventListener("resize", updateDimensions);
    }, [])

    const updateDimensions = () => {
         const width = window.innerWidth
         setWindowWidth(width)
       }

    const stylesNeighbours = {
        backgroundColor: width < 650 ? "red" : "black"
    }

    return(
        <div
        style={styles}
         className={`${isModalActive ? "modal" : "modal hidden"}`}>
            <div
             style={styles}   
             className="modal-country-container">
                <button onClick={handleClickModalHide} className="close-modal">&times;</button>
                <img 
                    style={imgStyle}
                    className="modal-country-img" src={props.country.flags.png}></img>
                <h1 className="modal-country-name">{props.country.name.common}</h1>
                <h4>{props.country.name.official ? `Official name: ${props.country.name.official}` : ""}</h4>
                <p>{props.country.capital ? `Capital city: ${props.country.capital[0]}` : "No capital city"}</p>
                <p>{props.country.subregion ? `Region: ${props.country.region} - ${props.country.subregion}` : `${props.country.region}`}</p>
                <p>Area: {props.country.area.toLocaleString("en-US")} km²</p>
                <p>Population: {props.country.population.toLocaleString("en-US")}</p>
                <p>Population density: {Math.floor(props.country.population/props.country.area)}/km²</p>
                <a href={props.country.maps.googleMaps} target="_blank">Google Maps</a>
            </div>
            <div 
                className="modal-country-neighbours">
                <h2>{`${borderElements.length === 0 ? "" : "Neighbouring countries"}`}</h2>
                {borderElements}
            </div>
        </div>
    )
}


