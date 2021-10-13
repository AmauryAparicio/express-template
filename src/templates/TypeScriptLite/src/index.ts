import dotenv from "dotenv";
import app from "./app";
import { connect } from "./database/config";

dotenv.config();

/* -------------------------------- Database -------------------------------- */

connect();

/* --------------------------- Starting the server -------------------------- */

app.listen(app.get("port"), () => {
  console.log(
    `\n Server runnign on port ${app.get("port")} in ${
      process.env.NODE_ENV
    } mode`
  );
  console.log(
    `\n\t- Access documentation on http://localhost:${app.get("port")}/docs`
  );
  console.log(
    `\t- Access to api routes on http://localhost:${app.get("port")}/api \n`
  );
});
