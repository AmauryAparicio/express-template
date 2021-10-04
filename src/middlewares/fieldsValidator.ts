import { validationResult } from "express-validator";
import type { middleware } from "./middlewares";

const validateFields: middleware = (req, res, next) => {
  const err = validationResult(req);

  if (!err.isEmpty())
    return res.status(400).json({
      status: "error",
      err: err.mapped(),
    });

  next();
};

export default validateFields;
