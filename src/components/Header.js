import {Link} from "react-router-dom";
import { useApp, useAppUpdate } from "../context/AppContext";

export default function Header() {
    const appContext = useApp()
    const appContextUpdate = useAppUpdate()

    const {lightModeActive, width} = appContext
    const {themeSwitch} = appContextUpdate

    const styles = {
        backgroundColor: lightModeActive ? "white" : "#344557",
        color: lightModeActive ? "black" : "white",
        textDecoration: "none",
        fontSize: width < 650 ? "12px" : "16px",
        paddingRight: width < 650 ? "2rem" : "4rem",
        paddingLeft: width < 650 ? "1rem" : "4rem"
    }

    const h3Styles = {
        fontSize: width < 650 ? "14px" : "16px"
    }
    
    return(
        <div 
            style={styles}        
            className="header">
            <Link style={styles} to="/">
                <h1>Where in the world?</h1>
            </Link>
            <h3 onClick={themeSwitch} className="header-mode-switch" style={h3Styles}>{lightModeActive ? "☾ Dark Mode" : "🌣 Light Mode"  }</h3>
        </div>
    )
}