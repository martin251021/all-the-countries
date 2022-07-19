import { useApp, useAppUpdate } from "../context/AppContext";

export default function FilterSearch() {

    const appContext = useApp()
    const appContextUpdate = useAppUpdate()

    const {activeSearch, activeFilter, lightModeActive} = appContext
    const {handleSearchChange, handleFilterChange} = appContextUpdate

    const styles = {
        backgroundColor: lightModeActive ? "white" : "#a1a1a1ff",
        color: lightModeActive ? "#212224ff" : "white"
    }

    const stylesNavbar = {
        backgroundColor: lightModeActive ? "#f8f8f8" : "#212224ff"
    }

    return(
        <div 
        style={stylesNavbar}
        className="navbar">
        <input
            style={styles} 
            onChange={handleSearchChange}
            value={activeSearch}
            placeholder="Search for a country.." 
            className="search" />
        <select
            style={styles} 
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