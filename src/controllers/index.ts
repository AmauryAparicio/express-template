import type { Handler } from "./controllers";

export const helloWorld: Handler = (req, res) => {
  return res.status(200).json({ message: "Hello World!" });
};
