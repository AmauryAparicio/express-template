"use strict";

const { validateToken } = require("../helpers/tokens");

/**
 * Validates the existence of token in headers and validates it with validateToken helper.
 * @param req Request object
 * @param res Response object
 * @param next NextFunction
 * @returns the payload in the token property os the request body or Error
 */

const tokenValidator = async (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(400).json({
      status: "error",
      err: "Token is missing on request",
    });
  } else {
    try {
      const payload = await validateToken(token);

      req.body.token = payload;
    } catch {
      return res.status(400).json({
        status: "error",
        err: "Token not valid",
      });
    }

    next();
  }
};

module.exports = tokenValidator;
