import { loadBicycleStationData } from "./bicycleStationDataLoader";
import { loadJourneyData } from "./journeyDataLoader";

export const loadData = async () => {
  await loadBicycleStationData();
  await loadJourneyData();
};
