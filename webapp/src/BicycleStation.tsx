import { useParams } from "react-router-dom";


const BicycleStationComponent = () => {
    const { id } = useParams();
    const text = `Bicycle station id: ${id}`
    return <div>{text}</div>
}

export default BicycleStationComponent;