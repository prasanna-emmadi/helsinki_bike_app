import { Heading, ListItem, OrderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Heading data-testid="home">Home</Heading>
            <OrderedList>
                <ListItem>
                    <Link to={"/journeys"} data-testid="journeys">
                        Journeys
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to={"/bicyclestations"} data-testid="bicyclestations">
                        BicycleStations
                    </Link>
                </ListItem>
            </OrderedList>
        </>
    )
}

export default Home;