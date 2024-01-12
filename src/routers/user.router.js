const { Router } = require("express");
const userController = require('../controllers/user.controller');
const userRouter = Router();


userRouter.get("/login", userController.loginPage);
userRouter.get("/user", userController.registerPage);

module.exports = userRouter;