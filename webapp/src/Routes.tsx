import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Journeys from "./Journeys";
import BicycleStations from "./BicycleStations";
import BicycleStationComponent from "./BicycleStation";
import Home from "./Home";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/bicyclestation/:id" element={<BicycleStationComponent />} />
                <Route path="/bicyclestations" element={<BicycleStations />} />
                <Route path="/journeys" element={<Journeys />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};
export default AppRoutes;
