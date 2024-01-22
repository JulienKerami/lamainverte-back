const { Router } = require("express");
const taskController = require('../controllers/task.controller');
const taskRouter = Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Récupérer la liste de toutes les tâches
 *     responses:
 *       200:
 *         description: Succès renvoie la liste de toutes les tâches
 *       500:
 *         description: Erreur serveur
 * /tasks/{taskId}:
 *   get:
 *     summary: Récupérer une tâche par son id
 *     parameters:
 *       - name: taskId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Succès renvoie la tâche demandée
 *       500:
 *         description: Erreur serveur
 */


taskRouter.get("/tasks", taskController.getAllTasks);
taskRouter.get("/tasks/:taskId", taskController.getOneTask);
taskRouter.patch("/tasks/:taskId", taskController.updateTask);


module.exports = taskRouter;