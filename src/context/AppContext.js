import React, { useContext, useState } from "react";

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

    return(
        <AppContext.Provider value={{
            lightModeActive:lightModeActive
        }}>
            <AppContextUpdate.Provider value={{
                themeSwitch
            }}>
                {children}
            </AppContextUpdate.Provider>
        </AppContext.Provider>
    )
}