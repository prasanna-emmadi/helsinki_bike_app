import dotenv from "dotenv";
import express from "express";
import { addJourney, getJourneys } from "../controllers/JourneyController.js";

dotenv.config();
const router = express.Router();

router.get("/", getJourneys);
router.post("/", addJourney);

export default router;
