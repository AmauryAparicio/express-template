"use strict";

const mongoose = require("mongoose");

/**
 * Here you can configure the database, you can pass the url by the .env with the DB_CNN variable.
 */

// We export the mongoose data
const database = mongoose;

// Export the connection
const connect = () => {
  // Get the database url depending on the environment
  const url = () => {
    switch (process.env.NODE_ENV) {
      case "development":
        return process.env.DEV_DB || "";
      case "production":
        return process.env.PRODUCTION_DB || "";
      case "test":
        return process.env.TEST_DB || "";
      default:
        return "";
    }
  };
  //then we try to make the connection
  try {
    mongoose.Promise = Promise;
    mongoose.connect(url(), {
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

// export the disconnection method, this is going to be used for testing purposes
const disconnect = done => {
  mongoose.disconnect(done);
};

module.exports = { database, connect, disconnect };
