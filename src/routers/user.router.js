const { Router } = require("express");
const userController = require('../controllers/user.controller');
const userRouter = Router();

userRouter.get("/user", userController.userPage);
userRouter.post("/user", userController.createUser);

module.exports = userRouter;