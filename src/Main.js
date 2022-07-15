import React, { useState } from "react"
import Country from "./Country"
import Modal from "./Modal"
import countries from "./countries"


export default function Main(props) {

    const [id, setId] = useState(0)
    const [isModalActive, setModalActive] = useState(false)
    const [isOverlayActive, setOverlayActive] = useState(false)
    const [filteredCountries, setFilteredCountries] = useState(countries)
    const [activeFilter, setActiveFilter] = useState("All")
    const [activeSearch, setActiveSearch] = useState("")
    // const [fetchedData, setFetchedData] = useState(null)

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("https://restcountries.com/v3.1/all")
    //         const actualData = await response.json()
    //         setFetchedData(actualData)
    //     }

    //     fetchData()
    // })
    

    const handleClickModalShow = function() {
        setModalActive(true)
        setOverlayActive(true)
    }

    const handleClickModalHide = function() {
        setModalActive(false)
        setOverlayActive(false)
    }

    const countriesElements = filteredCountries.map(e => {
        return(
            <Country
                key={e.id}
                e={e}
                handleClick={handleClickModalShow}
                id={id}
                setId={setId}
                lightModeActive={props.lightModeActive}
                setLightModeActive={props.setLightModeActive}
            />
        )
    })

    const useEscape = function(onEscape) {
        React.useEffect(() => {
            const handleEsc = (event) => {
                if (event.keyCode === 27) 
                    onEscape()
            };
            window.addEventListener('keydown', handleEsc);
    
            return () => {
                window.removeEventListener('keydown', handleEsc);
            };
        }, []);
    }

    useEscape(() => {
        setModalActive(false)
        setOverlayActive(false)
    })

    const handleFilterChange = e => {
        setActiveFilter(e.target.value)
    }

    const handleSearchChange = (e) => {
        setActiveSearch(e.target.value)
    }

    React.useEffect(() => {
        if(activeFilter === "All") {
            setFilteredCountries(countries)
        } else {
            setFilteredCountries(countries.filter(e => e.region === activeFilter))
        }
        
    },[activeFilter])

    // ked nepridám žiadnu dependendy array do useEffectu, bude sa cb useffectu spustat po každom renderi
    // ked pridam prazdnu dependency array, spusti sa cb iba po prvom renderi
    // ked dam do dependency array state, spusti sa cb vždy ked sa state zmení

    React.useEffect(() => {
        if(activeSearch === "") {
            setFilteredCountries(countries)
        } else {
            setFilteredCountries(countries.filter(e => filterHelper(e)))
        }
    }, [activeSearch])

    const filterHelper = (e) => {
        if(e.name.common.toLowerCase().includes(activeSearch.toLowerCase())) {
            return true
        } if(e.capital && e.capital[0].toLowerCase().includes(activeSearch.toLowerCase())) {
            return true
        } else {
            return false
        }
        
    }

    const styles = {
        backgroundColor: props.lightModeActive ? "white" : "#a1a1a1ff",
        color: props.lightModeActive ? "#212224ff" : "white"
    }

    const stylesNavbar = {
        backgroundColor: props.lightModeActive ? "#f8f8f8" : "#212224ff"
    }

    // if(fetchedData) {

    return(
        <div className="main">
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
            <div className="countries-elements" >
               {countriesElements} 
            </div>
            <div>
                <Modal 
                    isModalActive={isModalActive}
                    isOverlayActive={isOverlayActive}
                    handleClickModalHide={handleClickModalHide}
                    handleClick={handleClickModalShow}
                    country={countries[id]}
                    countriesAll={countries}

                    id={id}
                    setId={setId}

                    lightModeActive={props.lightModeActive}
                    setLightModeActive={props.setLightModeActive}
                />
            </div>
            <div
                onClick={() => {
                    setModalActive(false)
                    setOverlayActive(false)
                }}
                className={`${isOverlayActive ? "overlay" : "overlay hidden"}`}></div>
        </div>
    )
    // } else {
    //     return null
    // }
}