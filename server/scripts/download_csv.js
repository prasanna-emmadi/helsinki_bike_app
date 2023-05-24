import download from "download";
import { rm, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";

const downloadFiles = async () => {
  const dest = "csv";
  if (existsSync(dest)) {
    await rm(dest, { recursive: true });
  }
  await mkdir(dest);

  await download(
    "https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv",
    dest,
    "2021-05.csv"
  );

  await download(
    "https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv",
    dest,
    "2021-06.csv"
  );

  await download(
    "https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv",
    dest,
    "2021-07.csv"
  );

  await download(
    "https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv",
    dest,
    { filename: "bicycle_stations.csv" }
  );
};

await downloadFiles();
