"use strict";

/**
 * Returns an object that will fill the body of the response
 * @param data The body you will send
 * @returns the response objet to put in the json method of ther res
 */

const createSuccessResponse = data => ({
  status: "success",
  data,
});

/**
 * Returns an object that will fill the body of the response
 * @param err The error you will send to the response
 * @returns the response objet to put in the json method of ther res
 */

const createErrorResponse = err => ({
  status: "error",
  err:
    err instanceof Error
      ? err.message
      : typeof err === "string"
      ? err
      : "Error desconocido...",
});

module.exports = { createSuccessResponse, createErrorResponse };
