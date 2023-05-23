import React from "react";
import { AppContext } from "./AppContext";
import { ListItem, OrderedList } from "@chakra-ui/react";

const Journeys = () => {
    const { journeys, journeysLoading } = React.useContext(AppContext)

    const journeysText = "No of journeys " + journeys.length;
    const isLoading = "isLoading " + journeysLoading;
    // list of journeys
    return (<>
        <div>Journeys</div>
        <div>{isLoading}</div>
        <div>{journeysText}</div>
        <OrderedList>
            {journeys.map((journey, index) => {
                const { departureStationName, returnStationName } = journey
                const content = `${departureStationName} - ${returnStationName}`
                return (<ListItem key={index}>
                    {content}
                </ListItem>)
            })}
        </OrderedList>
    </>)
}

export default Journeys;