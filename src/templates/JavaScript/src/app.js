"use strict";

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./router");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = require("./swaggerOptions");

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

/* ------------------------------ Documentation ----------------------------- */

//* Refer to swagger and swagger-jsdoc for documentation
const spects = swaggerJsDoc(swaggerOptions);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(spects));

module.exports = app;
