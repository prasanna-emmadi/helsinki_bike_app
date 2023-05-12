import mongoose from "mongoose";

export const connectMongoose = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};
