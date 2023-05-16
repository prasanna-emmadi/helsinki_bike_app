import React from "react";
import { getBicycleStations,  } from "./api/api";

const BicycleStations = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const fetchStations = async () => {
        if (data.length === 0) {
            setLoading(true);
            const data = await getBicycleStations();
            setData(data.bicycleStations)
            setLoading(false)
        }
        }
        fetchStations()
    }, [data, setData, setLoading])

    const noOfStations = "No of bicycle stations " + data.length;
    const isLoading = "isLoading " + loading;

    return (<>
    <div>BicycleStations</div>
    <div>{isLoading}</div>
    <div>{noOfStations}</div>
    </>)
}

export default BicycleStations;