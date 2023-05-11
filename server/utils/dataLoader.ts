import { insertMany } from "../controllers/JourneyController.js";

export const loadData = async () => {
  await insertMany([]);
};
