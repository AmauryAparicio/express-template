import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerOptions from "./swaggerOptions";

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

export default app;
