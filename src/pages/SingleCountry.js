import {Link, useParams} from "react-router-dom";

export default function SingleCountry() {
    const {countryId} = useParams()

    return(
        <div>
            <h2>This will be single country</h2>
        </div>
    )
}