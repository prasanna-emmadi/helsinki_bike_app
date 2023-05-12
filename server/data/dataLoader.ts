import { loadBicycleStationData } from "../src/utils/bicycleStationDataLoader.js";
import { connectMongoose } from "../src/utils/db.js";
import { loadJourneyData } from "../src/utils/journeyDataLoader.js";

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
