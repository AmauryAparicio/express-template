"use strict";

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./router");

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

module.exports = app;
