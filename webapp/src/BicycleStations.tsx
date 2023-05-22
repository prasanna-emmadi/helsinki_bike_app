import React from "react";
import { AppContext } from "./AppContext";

const BicycleStations = () => {
    const { bicycleStations, bicycleStationsLoading } = React.useContext(AppContext)

    const noOfStations = "No of bicycle stations " + bicycleStations.length;
    const isLoading = "isLoading " + bicycleStationsLoading;

    return (<>
        <div>BicycleStations</div>
        <div>{isLoading}</div>
        <div>{noOfStations}</div>
    </>)
}

export default BicycleStations;