import dotenv from "dotenv";
import app from "./app";
import { connect } from "./database/config";

dotenv.config();

/* -------------------------------- Database -------------------------------- */

connect();

/* --------------------------- Starting the server -------------------------- */

app.listen(app.get("port"), () => {
  console.log(`Server runnign on port ${app.get("port")}`);
  console.log(`Access on  http://localhost:${app.get("port")}`);
});
