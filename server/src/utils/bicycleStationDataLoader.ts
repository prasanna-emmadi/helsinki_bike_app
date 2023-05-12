import { insertMany } from "../controllers/JourneyController.js";
import { IBicycleStation } from "../models/bicycleStations.js";
import { processFile } from "./parseCSV.js";
import { parseFloatWithDefault, parseIntWithDefault } from "./stringUtil.js";

const HEADERS = [
  "ID",
  "FID",
  "Nimi",
  "Namn",
  "Name",
  "Osoite",
  "Adress",
  "Kaupunki",
  "Stad",
  "Operaattor",
  "Kapasiteet",
  "x",
  "y",
];

const FILES = ["./data/bicycle_stations.csv"];

export const toDbSchema = (record) => {
  return {
    ID: parseIntWithDefault(record["ID"]),
    FID: parseIntWithDefault(record["FID"]),
    Nimi: record["Nimi"],
    Namn: record["Namn"],
    Osoite: record["Osoite"],
    Address: record["Address"],
    Stad: record["Stad"],
    Operaattor: record["Operaattor"],
    Kapasiteet: parseIntWithDefault(record["Kapasiteet"]),
    x: parseFloatWithDefault(record["x"]),
    y: parseFloatWithDefault(record["y"]),
  };
};

const writeCb = async (records) => {
  await insertMany(records);
};

export const loadBicycleStationData = async () => {
  const filterFunction = (record: IBicycleStation) => {
    // Don't import journeys that lasted for less than ten seconds
    // Don't import journeys that covered distances shorter than 10 meters
    return false;
  };
  const promises = FILES.map((fileName) => {
    return processFile(fileName, HEADERS, toDbSchema, writeCb, filterFunction);
  });

  try {
    await Promise.all(promises);
  } catch (e) {
    console.error("Error in loading bicycleStations");
    return Promise.reject(e);
  }
};
