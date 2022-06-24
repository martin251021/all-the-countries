import Neighbour from "./Neighbour"

export default function Modal(props) {
    
    const bordersCodes = props.country.borders ? props.country.borders.map(e => e) : [0]
    const filterByBorder = function(code) {
        if(bordersCodes.includes(code)) {
            return true
        } else {
            return false
        }
    }

    const styles = {
        backgroundColor: props.lightModeActive ? "white" : "#636363",
        color: props.lightModeActive ? "black" : "white"
    }

    const borderObjects = props.countriesAll.filter(e => filterByBorder(e.cca3))

    const borderElements = borderObjects.map(e => {
        return(
            <Neighbour
                key={e.id} 
                e={e}

                id={props.id}
                setId={props.setId}
                isModalActive={props.isModalActive}
                isOverlayActive={props.isOverlayActive}
                handleClickModalHide={props.handleClickModalHide}
                handleClick={props.handleClick}

                lightModeActive={props.lightModeActive}
                setLightModeActive={props.setLightModeActive}
                
            />
        )
    })

    return(
        <div
        style={styles}
         className={`${props.isModalActive ? "modal" : "modal hidden"}`}>
            <div
             style={styles}   
             className="modal-country-container">
                <button onClick={props.handleClickModalHide} className="close-modal">&times;</button>
                <img className="modal-country-img" src={props.country.flags.png}></img>
                <h1 className="modal-country-name">{props.country.name.common}</h1>
                <h4>{props.country.name.official ? `Official name: ${props.country.name.official}` : ""}</h4>
                <p>{props.country.capital ? `Capital city: ${props.country.capital[0]}` : "No capital city"}</p>
                <p>{props.country.subregion ? `Region: ${props.country.region} - ${props.country.subregion}` : `${props.country.region}`}</p>
                <p>Area: {props.country.area.toLocaleString("en-US")} km²</p>
                <p>Population: {props.country.population.toLocaleString("en-US")}</p>
                <p>Population density: {Math.floor(props.country.population/props.country.area)}/km²</p>
                <a href={props.country.maps.googleMaps} target="_blank">Google Maps</a>
            </div>
            <div className="modal-country-neighbours">
                <h2>{`${borderElements.length === 0 ? "" : "Neighbouring countries"}`}</h2>
                {borderElements}
            </div>
        </div>
    )
}

// vytiahnut z modal-country array v ktorom budu kody borders krajin
// podla kodov potom v celom objekte "countries" musim vyhladat krajiny jednu po druhej a vykreslit
