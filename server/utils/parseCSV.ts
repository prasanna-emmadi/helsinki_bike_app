import CSVParser from "csv-parser";
import fs from "node:fs";

export const toDbSchema = (record) => {
  return {
    departure: record["Departure"],
    return: record["Return"],
    departureStationId: record["Departure station id"],
    departureStationName: record["Departure station name"],
    returnStationId: record["Return station id"],
    returnStationName: record["Return station name"],
    coveredDistanceInMeters: parseInt(record["Covered distance (m)"]),
    durationInSeconds: parseInt(record["Duration (sec)"]),
  };
};

export const processFile = async (fileName, headers) => {
  let records = [];
  let skipLength = 1000;
  let count = 0;
  const parser = fs.createReadStream(fileName).pipe(CSVParser(headers));
  // @ts-ignore
  for await (const record of parser) {
    // Work with each record
    // @ts-ignore
    records.push(record);
    if (records.length === skipLength) {
      // push to the db every 100 records
      // convert the data and then push
      const _dbRecords = records.map((current_record) => {
        return toDbSchema(current_record);
      });
      // put this to
      //await insertMany(dbRecords);
      count = count + skipLength;
      console.log(`wrote records ${count}`);
      records = [];
    }
  }
  console.log("done loading to db");
  return records;
};
