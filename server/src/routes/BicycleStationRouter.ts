import dotenv from "dotenv";
import express from "express";
import {
  addBicycleStation,
  getBicycleStations,
} from "../controllers/BicycleStationController";

dotenv.config();
const router = express.Router();

router.get("/", getBicycleStations);
router.post("/", addBicycleStation);

export default router;
