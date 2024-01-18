const { Router } = require("express");
const taskController = require('../controllers/task.controller');
const taskRouter = Router();


taskRouter.get("/tasks", taskController.getAllTasks);
taskRouter.get("/tasks/:taskId", taskController.getOneTask);
//taskRouter.patch("/tasks/:taskId", taskController.updateTask);


module.exports = taskRouter;