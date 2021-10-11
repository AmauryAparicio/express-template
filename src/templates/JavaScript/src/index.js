"use strict";

const dotenv = require("dotenv");
const app = require("./app");
const { connect } = require("./database/config");

dotenv.config();

/* -------------------------------- Database -------------------------------- */

connect();

/* --------------------------- Starting the server -------------------------- */

app.listen(app.get("port"), () => {
  console.log(`Server runnign on port ${app.get("port")}`);
  console.log(`Access on  http://localhost:${app.get("port")}`);
});
