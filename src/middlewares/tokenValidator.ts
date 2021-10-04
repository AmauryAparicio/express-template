import { validateToken } from "../helpers/tokens";
import type { middleware } from "./middlewares";

const tokenValidator: middleware = async (req, res, next) => {
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
        err: "Token no válido",
      });
    }

    next();
  }
};

export default tokenValidator;
