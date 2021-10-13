import { createSuccessResponse } from "../helpers/responses";
import type { Handler } from "./controllers";

/**
 * Here we have a demo of an action in a controller, it receives the request and the response
 * The Handler Type, receives 3 params, the Params passed by url, the request body and the response body.
 */

export const helloWorld: Handler<{}, {}, { message: string }> = (req, res) => {
  return res
    .status(200)
    .json(createSuccessResponse({ message: "Hello World!" }));
};
