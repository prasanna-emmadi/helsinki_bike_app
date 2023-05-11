import CSVParser from "csv-parser";
import fs from "node:fs";

export const parse = (
  fileName: string,
  headers: Array<string>,
  insert: (any) => Promise<void>
) => {
  const results: Array<any> = [];
  let count = 0;
  // every hundred record insert
  fs.createReadStream(fileName)
    .pipe(CSVParser(headers))
    .on("data", (data: any) => {
      // push to the database
      //results.push(data);
      //console.log(data);
      // push to the database
      if (count === 100) {
        try {
          insert(results);
        } catch (e) {
          console.error(e);
        }
      }
    })
    .on("end", () => {
      console.log(" end " + count);
    });
};

const toDbSchema = (record) => {
  return {
    departure: record["Departure"],
    return: record["Return"],
    departureStationId: record["Departure station id"],
    departureStationName: record["Departure station name"],
    returnStationId: record["Return station id"],
    returnStationName: record["Return station name"],
    coveredDistanceInMeters: parseInt(record["Covered distance (m)"]),
    durationInSeconds: parseInt(record["Covered distance (m)"]),
  };
};

export const processFile = async (fileName, headers) => {
  let records = [];
  let count = 0;
  const parser = fs.createReadStream(fileName).pipe(CSVParser(headers));
  // @ts-ignore
  for await (const record of parser) {
    // Work with each record
    // @ts-ignore
    records.push(record);
    if (records.length === 100) {
      // push to the db every 100 records
      // convert the data and then push
      const _dbRecords = records.map((current_record) => {
        return toDbSchema(current_record);
      });
      // put this to
      //await insertMany(dbRecords);
      count = count + 100;
      console.log(`wrote records ${count}`);
      records = [];
    }
  }
  console.log("done loading to db");
  return records;
};
