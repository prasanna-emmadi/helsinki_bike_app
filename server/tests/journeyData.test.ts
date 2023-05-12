import { describe, expect, test } from "@jest/globals";
import { toDbSchema } from "../utils/journeyDataLoader.js";

describe("parseCSV", () => {
  test("toDbSchema", () => {
    const record = {
      Departure: "departure",
      Return: "return",
      "Departure station id": "dep id",
      "Departure station name": "dep name",
      "Return station id": "return id",
      "Return station name": "return name",
      "Covered distance (m)": 100,
      "Duration (sec.)": 100,
    };

    const actual = toDbSchema(record);
    const expected = {
      departure: "departure",
      return: "return",
      departureStationId: "dep id",
      departureStationName: "dep name",
      returnStationId: "return id",
      returnStationName: "return name",
      coveredDistanceInMeters: 100,
      durationInSeconds: 100,
    };
    expect(actual).toEqual(expected);
  });
});
