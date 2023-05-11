import dotenv from "dotenv";
import express from "express";
import {
  addJourney,
  getAllJourneys,
  getJourney,
} from "../controllers/JourneyController.js";
import { jwtVerify } from "../middleware/middleware.js";

dotenv.config();
const router = express.Router();

router.use("/", jwtVerify);

router.get("/:id", getJourney);
router.get("/", getAllJourneys);
router.post("/", addJourney);

export default router;
