import { describe, expect, test } from "@jest/globals";
import {
  parseFloatWithDefault,
  parseIntWithDefault,
} from "../src/utils/stringUtil";

describe("string util", () => {
  test("parseIntWithDefault", () => {
    expect(parseIntWithDefault("100")).toEqual(100);
    expect(parseIntWithDefault("NaN")).toEqual(0);
  });

  test("parseFloatWithDefault", () => {
    expect(parseIntWithDefault("100.0")).toEqual(100.0);
    expect(parseFloatWithDefault("NaN")).toEqual(0);
  });
});
