import { validationResult } from "express-validator";
import type { middleware } from "./middlewares";

/**
 * Middleware to validate errors passed by express-validator. Type receives 2 params, The params object, the Request body and the Response body.
 * @param req Request object
 * @param res Response object
 * @param next NextFunction
 * @returns Array of errors in string format
 */

const validateFields: middleware = (req, res, next) => {
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

export default validateFields;
