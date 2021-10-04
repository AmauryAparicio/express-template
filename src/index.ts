import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import database from "./database/config";
import router from "./router";

dotenv.config();

/* ----------------------------- Initialization ----------------------------- */

const app = express();

/* ---------------------------------- CORS ---------------------------------- */

app.use(cors());

/* -------------------------------- Database -------------------------------- */

database();

/* -------------------------------- Settings -------------------------------- */

app.set("port", process.env.PORT || 3000);

/* ------------------------------ Static files ------------------------------ */

app.use(express.static("public"));

/* ------------------------------- Middlewares ------------------------------ */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* --------------------------------- Routes --------------------------------- */

app.use("/api/home", router);

/* --------------------------- Starting the server -------------------------- */

app.listen(app.get("port"), () => {
  console.log(`Server runnign on port ${app.get("port")}`);
});
