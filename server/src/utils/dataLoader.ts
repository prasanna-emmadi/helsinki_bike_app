import { loadBicycleStationData } from "./bicycleStationDataLoader.js";
import { connectMongoose } from "./db.js";
import { loadJourneyData } from "./journeyDataLoader.js";

export const loadData = async () => {
  try {
    await connectMongoose();
    await loadBicycleStationData();
    await loadJourneyData();
    console.log("done");
    return Promise.resolve("done");
  } catch (e) {
    console.error("error in loading data", e);
    return Promise.reject("error");
  }
};

await loadData();
process.exit(0);
