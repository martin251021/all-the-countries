import { useThemeContext } from "../context/AppContext";
import { filterCountries } from "../services/util";

export const FilterSearch = ({ countries, countriesCallback }) => {
    const { colorMode, width } = useThemeContext()

    const styles = {
        backgroundColor: colorMode ? "white" : "#546F8C",
        color: colorMode ? "#212224ff" : "white"
    }

    const stylesNavbar = {
        backgroundColor: colorMode ? "#f8f8f8" : "#263340",
        display: width < 650 ? "block" : "flex",
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

    const searchCountries = (query) => {
        countriesCallback(filterCountries(countries ,query))
    };

    return(
        <div 
        style={stylesNavbar}
        className="navbar">
        <input
            style={{...styles, ...searchStyle}} 
            onChange={event => searchCountries(event.target.value)}
            placeholder="Search for a country..."
            className={colorMode? "search" : "search search-placeholder"} />
        <select
            style={{...styles, ...filterStyle}} 
            onChange={() => false}
            value={''} 
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