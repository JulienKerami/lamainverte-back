const { Router } = require("express");
const userController = require('../controllers/user.controller');
const userRouter = Router();

userRouter.get("/user", userController.userPage);
userRouter.post("/user", userController.createUser);
userRouter.post("/login", userController.loginUser);

module.exports = userRouter;