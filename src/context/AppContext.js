import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

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
    const [filteredCountries, setFilteredCountries] = useState(null)
    const [activeFilter, setActiveFilter] = useState("All")
    const [activeSearch, setActiveSearch] = useState("")
    const [apiData, setApiData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true)
                const response = await axios("https://restcountries.com/v3.1/all")
                setFilteredCountries(response.data)
                setApiData(response.data)
                setLoading(false)
            } catch(err) {
                setLoading(false)
                console.log(err)
            }
        }

        fetchData()
    },[])

    const handleFilterChange = e => {
        setActiveFilter(e.target.value)
    }

    const handleSearchChange = (e) => {
        setActiveSearch(e.target.value)
    }

    useEffect(() => {
        if(activeFilter === "All" && activeSearch === "") {
            setFilteredCountries(apiData)
        } else if(activeFilter === "All" && activeSearch !== "") {
            setFilteredCountries(apiData.filter(e => filterHelper(e)))
        } else {
            setFilteredCountries(apiData.filter(e => e.region === activeFilter).filter(e => filterHelper(e)))
        }
    },[activeFilter, activeSearch])

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
        useEffect(() => {
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
            activeSearch: activeSearch,
            apiData: apiData,
            loading: loading
        }}>
            <AppContextUpdate.Provider value={{
                themeSwitch,
                setId,
                setModalActive,
                setOverlayActive,
                setFilteredCountries,
                setActiveFilter,
                setActiveSearch,
                handleFilterChange,
                handleSearchChange,
                useEscape,
                setApiData,
                setLoading
            }}>
                {children}
            </AppContextUpdate.Provider>
        </AppContext.Provider>
    )
}