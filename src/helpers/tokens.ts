import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";

export const createToken = (payload: { [key: string]: string | number }) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED || "",
      { expiresIn: "2h" },
      (err, token) => {
        if (err) {
          console.error(err);
          return reject("Token could not be generated");
        }
        if (token) return resolve(token);
        return reject("Token could not be generated");
      }
    );
  });
};

export const validateToken = <T>(token: string) => {
  return new Promise<T & JwtPayload>((resolve, reject) => {
    try {
      const payload = jwt.verify(token, process.env.SECRET_JWT_SEED || "");
      if (typeof payload === "string") throw new Error(payload);
      return resolve(payload as T & JwtPayload);
    } catch (err) {
      return reject(err);
    }
  });
};

export default { validateToken, createToken };
