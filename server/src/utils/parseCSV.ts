import CSVParser from "csv-parser";
import fs from "node:fs";

export const processFile = async (
  fileName: string,
  headers: Array<string>,
  toDbSchema: (any) => any,
  writeCb: (any) => void,
  filterFunction: (any) => boolean
) => {
  let records = [];
  let skipLength = 1000;
  let count = 0;
  console.log("writing " + fileName);
  const parser = fs.createReadStream(fileName).pipe(CSVParser({ headers, skipLines: 1 }));
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
      await writeCb(records);
      count = count + skipLength;
      //console.log(`wrote records ${count}`);
      //console.log(records[0]);
      records = [];
    }
  }

  if (records.length > 0) {
    // insert
    count = count + records.length;
    // push
    await writeCb(records);

    records = [];
  }
  console.log("done loading to db from file " + fileName);
  return records;
};
