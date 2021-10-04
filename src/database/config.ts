import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect(process.env.DB_CNN as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Database online...");
  } catch (err) {
    console.log("Error:", err);
    throw new Error("Error connecting to database!");
  }
};
