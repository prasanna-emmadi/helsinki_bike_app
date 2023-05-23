import React from "react";
import { useParams } from "react-router-dom";
import { Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import { AppContext } from "./AppContext";
import { BicycleStation } from "./api/api";
import CardElement from "./CardElement";


const NotFound = () => {
    return (
        <Text>No bicycle station found</Text>
    )
}


const BicycleStationComponent = () => {
    const { bicycleStations } = React.useContext(AppContext)
    const { id } = useParams();
    const text = `Bicycle station id: ${id}`

    if (id) {

        const idInt = parseInt(id)
        const bicycleStation = bicycleStations.find((bicycleStation: BicycleStation) => {
            return bicycleStation.ID === idInt
        })

        if (bicycleStation) {

            return (<Card>
                <CardHeader>
                    <Heading size='md'>{text}</Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <CardElement heading="ID" text={bicycleStation.ID.toString()} />
                        <CardElement heading="Nimi" text={bicycleStation.Nimi} />
                        <CardElement heading="Address" text={bicycleStation.Address} />
                        <CardElement heading="Journeys starting at station" text={bicycleStation.totalNoOfJourneysStartingFromStation.toString()} />
                        <CardElement heading="Journeys ending at station" text={bicycleStation.totalNoOfJourneysEndingAtStation.toString()} />
                    </Stack>

                </CardBody>
            </Card>)

        }


    }

    return <NotFound />

}

export default BicycleStationComponent;