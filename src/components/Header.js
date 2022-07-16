export default function Header(props) {

    const handleThemeSwitch = () => {
        props.setLightModeActive(prevState => !prevState)
    }

    const styles = {
        backgroundColor: props.lightModeActive ? "white" : "#111213ff",
        color: props.lightModeActive ? "black" : "white"
    }
    
    return(
        <div 
            style={styles}
            
            className="header">
            <h1>Where in the world?</h1>
            <h3 onClick={handleThemeSwitch} className="header-mode-switch" >☾ Dark Mode</h3>
        </div>
    )
}