import React from "react";
import { AppContext } from "./AppContext";

const Journeys = () => {
    const { journeys, journeysLoading } = React.useContext(AppContext)

    const journeysText = "No of journeys " + journeys.length;
    const isLoading = "isLoading " + journeysLoading;

    return (<>
        <div>Journeys</div>
        <div>{isLoading}</div>
        <div>{journeysText}</div>
    </>)
}

export default Journeys;