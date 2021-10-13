import dotenv from "dotenv";
import type swaggerJsDoc from "swagger-jsdoc";

dotenv.config();

const url = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return `http://localhost:${process.env.PORT}/api`;
    case "production":
      return "https://{Your production url}/api";
    case "test":
      return `http://localhost:${process.env.PORT}/api`;
    default:
      return "";
  }
};

const swaggerOptions: swaggerJsDoc.Options = {
  definition: {
    openapi: "3.0.1",
    info: {
      description: "Template.",
      version: "1.0.0",
      title: "Template",
      contact: {
        email: "amaurysunstar@gmail.com",
      },
    },
    tags: [
      {
        name: "Demo",
        description: "Demo routes",
      },
    ],
    servers: [{ url: url() }],
  },
  apis: ["./src/router/*.ts"],
};

export default swaggerOptions;
