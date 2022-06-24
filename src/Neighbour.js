export default function Neighbour(props) {
    const getId = function() {
        props.setId(props.e.id)
    }

    const styles = {
        backgroundColor: props.lightModeActive ? "white" : "#403E3D",
        color: props.lightModeActive ? "black" : "white"
    }

    return(
        <div 
            style={styles}
            onClick={() => {
            props.handleClick()
            getId()
          } }  className="neighbour">
            <img className="neighbour-flag-img" src={props.e.flags.png}></img>
            <p>{props.e.name.common}</p>
        </div>
    )
}