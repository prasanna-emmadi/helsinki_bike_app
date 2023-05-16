import React from "react";
import { getJourneys } from "./api/api";

const Journeys = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const fetchJourneys = async () => {
        if (data.length === 0) {
            setLoading(true);
            const journeys = await getJourneys();
            setData(journeys)
            setLoading(false)
        }
        }
        fetchJourneys()
    }, [data, setData, setLoading])

    const journeysText = "No of journeys " + data.length;
    const isLoading = "isLoading " + loading;

    return (<>
    <div>{isLoading}</div>
    <div>{journeysText}</div>
    </>)
}

export default Journeys;