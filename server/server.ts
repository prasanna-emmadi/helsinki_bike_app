import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import JourneyRouter from "./routes/JourneyRouter.js";
import { parse } from "./utils/parseCSV.js";

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

parse("./2021-05.csv", HEADERS, (a: any): Promise<void> => {
  console.log(a);
  return Promise.resolve();
});

dotenv.config();

const app: express.Express = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`METHOD: ${req.method}`);
  console.log(`PATH: ${req.path}`);
  console.log("BODY: ", req.body);
  console.log("QUERY: ", req.query);
  console.log("PARAMS:", req.params);
  next();
});

const connectMongoose = async () => {
  await mongoose.connect("mongodb://localhost:27017/BikeApp");
};
await connectMongoose();

app.use("/journey", JourneyRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
