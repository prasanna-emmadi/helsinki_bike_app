import cors from "cors";
import express from "express";

import JourneyRouter from "./routes/JourneyRouter.js";
import BicycleStationRouter from "./routes/BicycleStationRouter.js";
import { connectMongoose } from "./utils/db.js";
import { PORT } from "./config.js"


const app: express.Express = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  const emptyFn = () => { };
  console.log = emptyFn;
  console.error = emptyFn;
  console.info = emptyFn;
}

app.use((req, _res, next) => {
  console.log(`METHOD: ${req.method}`);
  console.log(`PATH: ${req.path}`);
  console.log("BODY: ", req.body);
  console.log("QUERY: ", req.query);
  console.log("PARAMS:", req.params);
  next();
});

await connectMongoose();

app.use("/journey", JourneyRouter);
app.use("/bicyclestation", BicycleStationRouter);

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`);
  try {
    //await loadData();
    return Promise.resolve();
  } catch (e) {
    console.error("error in loading");
  }
});

export default app;