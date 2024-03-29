import mongoose from "mongoose";

/**
 * Here you can configure the database, you can pass the url by the .env with the DB_CNN variable.
 */

// We export the mongoose data
export const database = mongoose;

// Export the connection
export const connect = () => {
  // Get the database url depending on the environment
  const url = () => {
    switch (process.env.NODE_ENV) {
      case "development":
        return process.env.DEV_DB;
      case "production":
        return process.env.PRODUCTION_DB;
      case "test":
        return process.env.TEST_DB;
      default:
        return "";
    }
  };
  //then we try to make the connection
  try {
    mongoose.Promise = Promise;
    mongoose.connect(url() || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("\n\t\t-- Database online --");
  } catch (err) {
    console.log("Error:", err);
    throw new Error("Error connecting to database!");
  }
};

// export the disconnection method, this is going to be used for testing purposes
export const disconnect = (done: (err?: any) => void) => {
  mongoose.disconnect(done);
  console.log("\n\t\t-- Database offline --");
};

export default { database, connect, disconnect };
