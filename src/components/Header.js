import {Link} from "react-router-dom";
import { useThemeContext } from "../context/AppContext";

export const Header = () => {
    const { colorMode,  changeBackround, width } = useThemeContext()

    const styles = {
        backgroundColor: colorMode ? "white" : "#344557",
        color: colorMode ? "black" : "white",
        textDecoration: "none",
        fontSize: width < 650 ? "10px" : "16px",
        paddingRight: width < 650 ? "2rem" : "4rem",
        paddingLeft: width < 650 ? "1rem" : "2rem"
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
            <h3 onClick={() => changeBackround()} className="header-mode-switch" style={h3Styles}>{colorMode ? "☾ Dark Mode" : "🌣 Light Mode"  }</h3>
        </div>
    )
}