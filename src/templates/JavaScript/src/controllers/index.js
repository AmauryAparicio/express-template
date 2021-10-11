"use strict";

const { createSuccessResponse } = require("../helpers/responses");

/**
 * Here we have a demo of an action in a controller, it receives the request and the response
 * The Handler Type, receives 3 params, the Params passed by url, the request body and the response body.
 */

const helloWorld = (req, res) => {
  return res
    .status(200)
    .json(createSuccessResponse({ message: "Hello World!" }));
};

module.exports = { helloWorld };
