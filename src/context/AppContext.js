import React, { createContext, useContext, useState, useEffect } from "react";

const themes = {
    css: {
        light: 'f8f8f8',
        dark: '263340'
    }
}

export const ThemeContext = createContext(themes)

export function useThemeContext() {
    return useContext(ThemeContext)
}

export function AppProvider({ children }) {
    const [colorMode, setThemeColorMode] = useState(true)
    const changeBackround = () => {
        setThemeColorMode(prevState => !prevState)
    }

    const [filteredCountries, setFilteredCountries] = useState(null)
    const [activeFilter, setActiveFilter] = useState("All")
    const [activeSearch, setActiveSearch] = useState("")
    const [apiData, setApiData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [width, setWindowWidth] = useState(0)

    useEffect(() => { 
        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => 
          window.removeEventListener("resize", updateDimensions);
    }, [])

    const updateDimensions = () => {
         const width = window.innerWidth
         setWindowWidth(width)
    }

    const handleFilterChange = e => {
        setActiveFilter(e.target.value)
    }

    const handleSearchChange = (e) => {
        setActiveSearch(e.target.value)
    }
    
    return(
        <ThemeContext.Provider value={{
            colorMode, changeBackround,
             filteredCountries, activeFilter, activeSearch, apiData, loading, width,
                setFilteredCountries,
                setActiveFilter,
                setActiveSearch,
                handleFilterChange,
                handleSearchChange,
                setApiData,
                setLoading
        }}>
            {children}
        </ThemeContext.Provider>
    )
}