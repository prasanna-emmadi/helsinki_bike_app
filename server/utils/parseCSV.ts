import CSVParser from "csv-parser";
import fs from "node:fs";

export const toJourneyDbModel = (record) => {
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

export const processFile = async (
  fileName,
  headers,
  toDbSchema: (any) => any,
  filterFunction: (any) => boolean
) => {
  let records = [];
  let skipLength = 1000;
  let count = 0;
  const parser = fs.createReadStream(fileName).pipe(CSVParser(headers));
  // @ts-ignore
  for await (const record of parser) {
    // Work with each record
    // @ts-ignore
    // if record is not filtered add to the collection
    const dbRecord = toDbSchema(record);
    if (!filterFunction(dbRecord)) {
      // @ts-ignore
      records.push(dbRecord);
    }
    if (records.length === skipLength) {
      // push to the db every 100 records
      // convert the data and then push
      // put this to
      //await insertMany(records);
      count = count + skipLength;
      console.log(`wrote records ${count}`);
      console.log(records[0]);
      records = [];
    }
  }
  console.log("done loading to db");
  return records;
};
