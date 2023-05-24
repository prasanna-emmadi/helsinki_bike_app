import { Heading, ListItem, OrderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Heading>Home</Heading>
            <OrderedList>
                <ListItem>
                    <Link to={"/journeys"}>
                        Journeys
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to={"/bicyclestations"}>
                        BicycleStations
                    </Link>
                </ListItem>
            </OrderedList>
        </>
    )
}

export default Home;