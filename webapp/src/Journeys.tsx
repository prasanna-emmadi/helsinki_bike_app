import React from "react";
import { Journey, getJourneys } from "./api/api";

const Journeys = () => {
    const [data, setData] = React.useState<Array<Journey>>([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const fetchJourneys = async () => {
            if (data.length === 0) {
                setLoading(true);
                const journeyResponse = await getJourneys();
                console.log("journeysResponse", journeyResponse)
                setData(journeyResponse.journeys)
                setLoading(false)
            }
        }
        fetchJourneys()
    }, [data, setData, setLoading])

    const journeysText = "No of journeys " + data.length;
    const isLoading = "isLoading " + loading;

    return (<>
        <div>Journeys</div>
        <div>{isLoading}</div>
        <div>{journeysText}</div>
    </>)
}

export default Journeys;