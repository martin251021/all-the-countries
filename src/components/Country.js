import { useApp } from "../context/AppContext";
import {Link} from "react-router-dom";

export default function Country(props) {

    const appContext = useApp()
    const {lightModeActive, width} = appContext

    const styles = {
        backgroundColor: lightModeActive ? "white" : "#3C4F63",
        color: lightModeActive ? "black" : "white"
    }

    const h2Styles = {
        fontSize: width < 650 ? "18px" : "20px"
    }

    const h4Styles = {
        fontSize: width < 650 ? "14px" : "16px"
    }

    return(
        <Link to={`/${props.e.cca3}`}>
        <div
        style={styles}
        id={props.e.cca3} 
        className="country" >
            
            <img className="country-img" src={props.e.flags.png}/>
            <div className="country-data">
                <h2 style={h2Styles}>{props.e.name.common}</h2>
                    <h4 style={h4Styles}>Population: {props.e.population.toLocaleString('en-US')}</h4>
                    <h4 style={h4Styles}>Region: {props.e.region}</h4>
                    <h4 style={h4Styles}>{props.e.capital ? `Capital city: ${props.e.capital[0]}` : "No capital city"}</h4>  
            </div>
            <h3></h3>
        </div>
       </ Link>        
    )
}