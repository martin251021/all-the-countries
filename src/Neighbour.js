export default function Neighbour(props) {
    const getId = function() {
        props.setId(props.e.id)
    }

    const styles = {
        backgroundColor: props.lightModeActive ? "white" : "#403E3D",
        color: props.lightModeActive ? "black" : "white"
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
            props.handleClick()
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