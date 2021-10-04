import { Router } from "express";
import { helloWorld } from "../controllers";
import fieldsValidator from "../middlewares/fieldsValidator";

const router = Router();

router.get("/", [fieldsValidator], helloWorld);

export default router;
