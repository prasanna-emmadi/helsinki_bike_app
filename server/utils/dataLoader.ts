import { loadBicycleStationData } from "./bicycleStationDataLoader.js";
import { loadJourneyData } from "./journeyDataLoader.js";

export const loadData = async () => {
  await loadBicycleStationData();
  await loadJourneyData();
};
