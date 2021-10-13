"use strict";

const { validationResult } = require("express-validator");

/**
 * Middleware to validate errors passed by express-validator. Type receives 2 params, The params object, the Request body and the Response body.
 * @param req Request object
 * @param res Response object
 * @param next NextFunction
 * @returns Array of errors in string format
 */

const fieldsValidator = (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty())
    return res.status(400).json({
      status: "error",
      err: err
        .formatWith(error => {
          return error.msg;
        })
        .array(),
    });
  next();
};

module.exports = fieldsValidator;
