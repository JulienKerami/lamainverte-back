const { Router } = require("express");
const taskController = require('../controllers/task.controller');
const taskRouter = Router();


taskRouter.get("/tasks", taskController.getAllTasks);

module.exports = taskRouter;