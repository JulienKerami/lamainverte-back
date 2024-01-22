const { Router } = require("express");
const mainController = require('../controllers/main.controller');
const mainRouter = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Just a rendered message to check if the server is up
 *     responses:
 *       200:
 *         description: Succès
 */

mainRouter.get("/", mainController.homePage);

module.exports = mainRouter;