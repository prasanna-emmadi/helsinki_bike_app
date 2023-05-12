import mongoose from "mongoose";

export const connectMongoose = async () => {
  await mongoose.connect("mongodb://localhost:27017/BikeAppDatabase");
};
