import React from "react";
import { BicycleStation, getBicycleStations,  } from "./api/api";

const BicycleStations = () => {
    const [data, setData] = React.useState<Array<BicycleStation>>([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const fetchStations = async () => {
        if (data.length === 0) {
            setLoading(true);
            const response = await getBicycleStations();
            setData(response.bicycleStations)
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