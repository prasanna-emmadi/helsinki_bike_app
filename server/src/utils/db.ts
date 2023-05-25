import mongoose from "mongoose";
import { MONGO_URI } from "../config.js"

export const connectMongoose = async () => {
  await mongoose.connect(MONGO_URI);
};