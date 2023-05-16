import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log("mongo_uri ", process.env.MONGO_URI);

export const connectMongoose = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};