import { IBicycleStation } from "../models/bicycleStations.js";
import { processFile } from "./parseCSV.js";

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
    ID: parseInt(record["ID"]),
    FID: parseInt(record["FID"]),
    Nimi: record["Nimi"],
    Namn: record["Namn"],
    Osoite: record["Osoite"],
    Address: record["Address"],
    Stad: record["Stad"],
    Operaattor: record["Operaattor"],
    Kapasiteet: parseInt(record["Kapasiteet"]),
    x: parseFloat(record["x"]),
    y: parseFloat(record["y"]),
  };
};

export const loadBicycleStationData = async () => {
  const filterFunction = (record: IBicycleStation) => {
    // Don't import journeys that lasted for less than ten seconds
    // Don't import journeys that covered distances shorter than 10 meters
    return false;
  };
  const promises = FILES.map((fileName) => {
    return processFile(fileName, HEADERS, toDbSchema, filterFunction);
  });

  try {
    await Promise.all(promises);
  } catch (e) {
    console.error("Error in loading bicycleStations");
    return Promise.reject(e);
  }
};
