import React, { useContext, useState } from "react";
import countries from "../data/countries";

const AppContext = React.createContext()
const AppContextUpdate = React.createContext()

export function useApp() {
    return useContext(AppContext)
}

export function useAppUpdate() {
    return useContext(AppContextUpdate)
}

export function AppProvider({ children }) {
    const [lightModeActive, setLightModeActive] = useState(true)
    document.body.style.backgroundColor = lightModeActive ? "#f8f8f8" : "#212224ff"

    const themeSwitch = () => {
        setLightModeActive(prevState => !prevState)
    }

    const [id, setId] = useState(0)
    const [isModalActive, setModalActive] = useState(false)
    const [isOverlayActive, setOverlayActive] = useState(false)
    const [filteredCountries, setFilteredCountries] = useState(countries)
    const [activeFilter, setActiveFilter] = useState("All")
    const [activeSearch, setActiveSearch] = useState("")

    const handleClickModalShow = function() {
        setModalActive(true)
        setOverlayActive(true)
    }

    const handleClickModalHide = function() {
        setModalActive(false)
        setOverlayActive(false)
    }

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

    return(
        <AppContext.Provider value={{
            lightModeActive:lightModeActive,
            id: id,
            isModalActive: isModalActive,
            isOverlayActive: isOverlayActive,
            filteredCountries: filteredCountries,
            activeFilter: activeFilter,
            activeSearch: activeSearch
        }}>
            <AppContextUpdate.Provider value={{
                themeSwitch,
                setId,
                setModalActive,
                setOverlayActive,
                setFilteredCountries,
                setActiveFilter,
                setActiveSearch,
                handleClickModalShow,
                handleClickModalHide,
                handleFilterChange,
                handleSearchChange,
                useEscape
            }}>
                {children}
            </AppContextUpdate.Provider>
        </AppContext.Provider>
    )
}