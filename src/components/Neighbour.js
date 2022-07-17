import { useApp, useAppUpdate } from "../context/AppContext";

export default function Neighbour(props) {

    const appContext = useApp()
    const appContextUpdate = useAppUpdate()

    const {lightModeActive, id, isModalActive, isOverlayActive, filteredCountries, activeFilter, activeSearch} = appContext
    const {setId, setModalActive, setOverlayActive, setFilteredCountries, setActiveFilter, setActiveSearch, handleClickModalShow, handleClickModalHide, handleFilterChange, handleSearchChange} = appContextUpdate
    
    const getId = function() {
        setId(props.e.id)
    }

    const styles = {
        backgroundColor: lightModeActive ? "white" : "#403E3D",
        color: lightModeActive ? "black" : "white"
    }

    const imgStyles = {
        width: props.width < 1232 ? "3rem" : "7rem",
        height: props.width < 1232 ? "2rem" : "4rem"
    }

    const neighbourParagraph = {
        fontSize: props.width < 1232 ? "8px" : "16px"
    }

    return(
        <div 
            style={styles}
            onClick={() => {
            handleClickModalShow()
            getId()
          } }  className="neighbour">
            <img 
                style={imgStyles}
                className="neighbour-flag-img" 
                src={props.e.flags.png}></img>
            <p
                style={neighbourParagraph}
            >{props.e.name.common}</p>
        </div>
    )
}