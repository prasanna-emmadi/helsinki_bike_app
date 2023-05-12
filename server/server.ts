import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import JourneyRouter from "./routes/JourneyRouter.js";
import { loadData } from "./utils/dataLoader.js";

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
  await mongoose.connect("mongodb://localhost:27017/BikeAppDb");
};
await connectMongoose();

app.use("/journey", JourneyRouter);

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`);
  try {
    await loadData();
  } catch (e) {
    console.error("error in loading");
  }
});
