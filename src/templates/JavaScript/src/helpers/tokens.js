"use strict";

const jwt = require("jsonwebtoken");

/**
 * CreateToken function manage the creation process for a token, by default expires in 2h. You can change the seed in the .env file.
 * @param payload is the payload you want to pass to the token
 * @returns a Promise that resolves the token
 */

const createToken = payload => {
  const expiresIn = "2h"; // Change this for expiration date;

  return (
    new Promise() <
    string >
    ((resolve, reject) => {
      jwt.sign(
        payload,
        process.env.SECRET_JWT_SEED || "",
        { expiresIn },
        (err, token) => {
          if (err) {
            console.error(err);
            return reject("Token could not be generated");
          }
          if (token) return resolve(token);
          return reject("Token could not be generated");
        }
      );
    })
  );
};

/**
 * ValidateToken validates a token and returns it payload if the token is valid. Its Generic so you can pass the type of the payload.
 * @param token Receives a token to get the payload
 * @returns A Promise that resolves the payload and information of the token.
 */

const validateToken = token => {
  return new Promise((resolve, reject) => {
    try {
      const payload = jwt.verify(token, process.env.SECRET_JWT_SEED || "");
      if (typeof payload === "string") throw new Error(payload);
      return resolve(payload);
    } catch (err) {
      return reject(err);
    }
  });
};

module.exports = { validateToken, createToken };
