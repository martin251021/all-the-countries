import { useApp, useAppUpdate } from "../context/AppContext";

export default function FilterSearch() {

    const appContext = useApp()
    const appContextUpdate = useAppUpdate()

    const {activeSearch, activeFilter, lightModeActive, width} = appContext
    const {handleSearchChange, handleFilterChange} = appContextUpdate

    const styles = {
        backgroundColor: lightModeActive ? "white" : "#546F8C",
        color: lightModeActive ? "#212224ff" : "white"
    }

    const stylesNavbar = {
        backgroundColor: lightModeActive ? "#f8f8f8" : "#263340",
        display: width < 650 ? "block" : "flex",
        // padding: width < 650 ? "0" : "1rem",
        marginTop: width < 650 ? "0.2rem" : "1rem",
        marginBottom: width < 650 ? "0.2rem" : "1rem"
    }

    const searchStyle = {
        width: width < 650 ? "96%" : "35%",
    }

    const filterStyle = {
        width: width < 650 ? "100%" : "25%",
        marginTop: width < 650 ? "8px" : "0"
    }

    return(
        <div 
        style={stylesNavbar}
        className="navbar">
        <input
            style={{...styles, ...searchStyle}} 
            onChange={handleSearchChange}
            value={activeSearch}
            placeholder="Search for a country..."
            className="search" />
        <select
            style={{...styles, ...filterStyle}} 
            onChange={handleFilterChange}
            value={activeFilter} 
            className="filter">                       
            <option value="All">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
        </select>
    </div>
    )
}