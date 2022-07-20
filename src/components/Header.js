import {Link} from "react-router-dom";
import { useApp, useAppUpdate } from "../context/AppContext";

export default function Header() {
    const appContext = useApp()
    const appContextUpdate = useAppUpdate()

    const {lightModeActive} = appContext
    const {themeSwitch} = appContextUpdate

    const styles = {
        backgroundColor: lightModeActive ? "white" : "#344557",
        color: lightModeActive ? "black" : "white",
        textDecoration: "none"
    }
    
    return(
        <div 
            style={styles}
            
            className="header">
            <Link style={styles} to="/">
                <h1>Where in the world?</h1>
            </Link>
            <h3 onClick={themeSwitch} className="header-mode-switch" >☾ Dark Mode</h3>
        </div>
    )
}