// define the schema here
import mongoose from "mongoose";

export interface IJourney {
  departure: string;
  return: string;
  departureStationId: string;
  departureStationName: string;
  returnStationId: string;
  returnStationName: string;
  coveredDistanceInMeters: number;
  durationInSeconds: number;
}

const JourneySchema = new mongoose.Schema<IJourney>({
  departure: String,
  return: String,
  departureStationId: String,
  departureStationName: String,
  returnStationId: String,
  returnStationName: String,
  coveredDistanceInMeters: Number,
  durationInSeconds: Number,
});
//  first String is Name of the collection in database
// https://stackoverflow.com/questions/14641834/how-to-get-rid-of-error-overwritemodelerror-cannot-overwrite-undefined-mode
let JournyeModel: any;
if (mongoose.models.journeys) {
  JournyeModel = mongoose.models.journeys;
} else {
  JournyeModel = mongoose.model<IJourney>("journeys", JourneySchema);
}
export default JournyeModel;
