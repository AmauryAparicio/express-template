"use strict";

const { helloWorld } = require("./../controllers");
const fieldsValidator = require("./../middlewares/fieldsValidator");
const { Router } = require("express");

/**
 * This is an example of a route that prints the "Hello World"
 */

const router = Router();

router.get("/", [fieldsValidator], helloWorld);

module.exports = router;
