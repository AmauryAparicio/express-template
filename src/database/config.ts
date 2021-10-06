import { connect } from "mongoose";

/**
 * Here you can configure the database, you can pass the url by the .env with the DB_CNN variable.
 */

export default async () => {
  try {
    await connect(process.env.DB_CNN || "", {
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
