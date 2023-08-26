import mongoose from "mongoose";

export const connectDB = async (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const configDb = () => {
  return mongoose.set("strictQuery", true);
};
