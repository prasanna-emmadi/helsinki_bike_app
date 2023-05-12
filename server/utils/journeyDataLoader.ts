import { processFile } from "./parseCSV.js";
const HEADERS = [
  "Departure",
  "Return",
  "Departure station id",
  "Departure station name",
  "Return station id",
  "Return station name",
  "Covered distance (m)",
  "Duration (sec.)",
];

const FILES = [
  "./data/2021-05.csv",
  "./data/2021-06.csv",
  "./data/2021-07.csv",
];

export const toDbSchema = (record) => {
  return {
    departure: record["Departure"],
    return: record["Return"],
    departureStationId: record["Departure station id"],
    departureStationName: record["Departure station name"],
    returnStationId: record["Return station id"],
    returnStationName: record["Return station name"],
    coveredDistanceInMeters: parseInt(record["Covered distance (m)"]),
    durationInSeconds: parseInt(record["Duration (sec.)"]),
  };
};

const filterFunction = (record) => {
  // Don't import journeys that lasted for less than ten seconds
  // Don't import journeys that covered distances shorter than 10 meters
  if (record.durationInSeconds < 10 || record.coveredDistanceInMeters < 10) {
    return true;
  } else {
    return false;
  }
};

export const loadJourneyData = async () => {
  const promises = FILES.map((fileName) => {
    return processFile(fileName, HEADERS, toDbSchema, filterFunction);
  });
  await Promise.all(promises);
};
