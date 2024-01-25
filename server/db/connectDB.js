import mongoose from "mongoose";

export async function connectToMongoDB(url) {
  return mongoose.connect(url);
}
