import { useState, useEffect, createContext } from "react";
import { Journey, getJourneys, getBicycleStations, BicycleStation } from "./api/api";

interface AppContextType {
    journeys: Array<Journey>;
    journeysLoading: boolean;
    bicycleStations: Array<BicycleStation>;
    bicycleStationsLoading: boolean;
}

export const AppContext = createContext<AppContextType>({
    journeys: [],
    journeysLoading: false,
    bicycleStations: [],
    bicycleStationsLoading: false

});

interface Props {
    children: React.ReactNode
}

const AppContextProvider = (props: Props) => {
    const [journeys, setJourneys] = useState<Array<Journey>>([]);
    const [journeysLoading, setJourneysLoading] = useState(false);
    const [bicycleStations, setBicycleStations] = useState<Array<BicycleStation>>([]);
    const [bicycleStationsLoading, setBicycleStationsLoading] = useState(false);


    useEffect(() => {
        const fetchJourneys = async () => {
            if (journeys.length === 0) {
                try {
                    setJourneysLoading(true);
                    const response = await getJourneys();
                    setJourneys(response.journeys);
                } catch (error) {
                    console.error(error);
                }
                setJourneysLoading(false);
            }
        };
        fetchJourneys();
    }, [journeys, setJourneys, setJourneysLoading]);

    useEffect(() => {
        const fetchBicycleStations = async () => {
            if (bicycleStations.length === 0) {
                try {
                    setBicycleStationsLoading(true);
                    const response = await getBicycleStations();
                    setBicycleStations(response.bicycleStations);
                } catch (error) {
                    console.error(error);
                }
                setBicycleStationsLoading(false);
            }
        };
        fetchBicycleStations();
    }, [bicycleStations, setBicycleStations, setBicycleStationsLoading]);

    const value: AppContextType = {
        journeys,
        journeysLoading,
        bicycleStations,
        bicycleStationsLoading
    }
    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    )
}

export default AppContextProvider;