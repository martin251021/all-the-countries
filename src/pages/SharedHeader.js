import {Outlet} from "react-router-dom"
import Header from "../components/Header"

export default function SharedHeader(props) {
    return(
        <>
            <Header
                    lightModeActive={props.lightModeActive}
                    setLightModeActive={props.setLightModeActive}
            />
                <Outlet/>
        </>
    )
}