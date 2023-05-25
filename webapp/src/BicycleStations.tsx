import React from "react";
import { AppContext } from "./AppContext";
import { ListItem, OrderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BicycleStations = () => {
    const { bicycleStations, bicycleStationsLoading } = React.useContext(AppContext)

    const noOfStations = "No of bicycle stations " + bicycleStations.length;
    const isLoading = "isLoading " + bicycleStationsLoading;
    // list of stations
    return (<>
        <div>BicycleStations</div>
        <div>{isLoading}</div>
        <div>{noOfStations}</div>
        <OrderedList>
            {bicycleStations.map((bicycleStation, index) => {
                const content = `${bicycleStation.Nimi}`
                return (<ListItem key={index}>
                    <Link to={`/bicyclestation/${bicycleStation.ID}`}>
                        {content}
                    </Link>
                </ListItem>)
            })}
        </OrderedList>

    </>)
}

export default BicycleStations;