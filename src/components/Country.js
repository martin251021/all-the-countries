export default function Country(props) {

    const getId = function() {
        props.setId(props.e.id)
    }

    const styles = {
        backgroundColor: props.lightModeActive ? "white" : "rgb(84, 79, 79)",
        color: props.lightModeActive ? "black" : "white"
    }

    return(
        
        <div
        style={styles}
        onClick={() => {
          props.handleClick()
          getId()
        } } 
        id={props.e.id} 
        className="country" >
            <img className="country-img" src={props.e.flags.png}/>
            <div className="country-data">
                <h2>{props.e.name.common}</h2>
                <h4>Population: {props.e.population.toLocaleString('en-US')}</h4>
                <h4>Region: {props.e.region}</h4>
                <h4>{props.e.capital ? `Capital city: ${props.e.capital[0]}` : "No capital city"}</h4> 
            </div>
            <h3></h3>
        </div>       
    )
}