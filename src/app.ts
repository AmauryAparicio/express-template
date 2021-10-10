import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router";
dotenv.config();

/* ----------------------------- Initialization ----------------------------- */

const app = express();

/* ---------------------------------- CORS ---------------------------------- */

app.use(cors());

/* -------------------------------- Settings -------------------------------- */

app.set("port", process.env.PORT || 3000);

/* ------------------------------ Static files ------------------------------ */

app.use(express.static("public"));

/* ------------------------------- Middlewares ------------------------------ */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* --------------------------------- Routes --------------------------------- */

app.use("/api/home", router);

export default app;
