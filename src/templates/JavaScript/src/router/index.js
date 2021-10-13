"use strict";

const { helloWorld } = require("./../controllers");
const fieldsValidator = require("./../middlewares/fieldsValidator");
const { Router } = require("express");

/**
 * This is an example of a route that prints the "Hello World"
 */

/**
 *  @swagger
 *  components:
 *    responses:
 *      Unauthorized:
 *        description: "(Unauthorized) No tiene autorización para llamar al servicio"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/errorResponse"
 *      NotFound:
 *        description: "(Not Found) No se encontro la información"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/errorResponse"
 *      BadRequest:
 *        description: "(Bad Request) Datos en la petición incorrectos"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/errorResponse"
 *      ServerError:
 *        description: "(Server Error) Error en el servidor"
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/errorResponse"
 *
 *    parameters:
 *      token:
 *        name: x-token
 *        in: header
 *        description: "Token de autenticación"
 *        required: true
 *        schema:
 *          type: string
 *
 *    schemas:
 *      helloSuccess:
 *        type: object
 *        properties:
 *          status:
 *            type: string
 *            description: "Estado de la respuesta"
 *          data:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *                description: "Message"
 *      errorResponse:
 *        type: object
 *        properties:
 *          status:
 *            type: string
 *            description: "Estado de la respuesta"
 *          err:
 *            oneOf:
 *              - type: string
 *              - type: array
 *                items:
 *                  type: string
 */

const router = Router();

/**
 * @swagger
 * /home:
 *   get:
 *     tags:
 *     - "Demo"
 *     summary: "Prints Hello World"
 *     description: "This route prints Hello World"
 *     responses:
 *       200:
 *         description: "(OK) Message returned"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/helloSuccess"
 *       400:
 *         $ref: "#/components/responses/Unauthorized"
 *       401:
 *         $ref: "#/components/responses/Unauthorized"
 *       404:
 *         $ref: "#/components/responses/NotFound"
 *       500:
 *         $ref: "#/components/responses/ServerError"
 */

router.get("/", [fieldsValidator], helloWorld);

module.exports = router;
