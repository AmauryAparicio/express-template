import { Router } from "express";
import { helloWorld } from "../controllers";
import fieldsValidator from "../middlewares/fieldsValidator";

/**
 * This is an example of a route that prints the "Hello World"
 */

const router = Router();

router.get("/", [fieldsValidator], helloWorld);

export default router;
