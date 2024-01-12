const { Router } = require("express");
const mainController = require('../controllers/main.controller');
const mainRouter = Router();


mainRouter.get("/", mainController.homePage);

module.exports = mainRouter;