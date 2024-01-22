const { Router } = require("express");
const taskController = require("../controllers/task.controller");
const taskRouter = Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Récupérer la liste de toutes les tâches avec un status_code de 1 pour l'utilisateur authentifié
 *     description: Renvoie toutes les tâches ayant un status_code de 1 et liées à des légumes, qui sont eux-mêmes liés à des zones associées à l'utilisateur authentifié.
 *     responses:
 *       200:
 *         description: Succès - renvoie la liste de toutes les tâches correspondantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   type:
 *                     type: string
 *                   status:
 *                     type: string
 *                   status_code:
 *                     type: number
 *                   start_date_period:
 *                     type: string
 *                     format: date-time
 *                   end_date_period:
 *                     type: string
 *                     format: date-time
 *                   effective_date:
 *                     type: string
 *                     format: date-time
 *                   comment:
 *                     type: string
 *                   vegetable_id:
 *                     type: number
 *                   Vegetable:
 *                     type: object
 *                     $ref: '#/components/schemas/Vegetable'
 *       500:
 *         description: Erreur serveur
 *
 * /tasks/{taskId}:
 *   get:
 *     summary: Récupérer une tâche par son id
 *     parameters:
 *       - name: taskId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Succès - renvoie la tâche demandée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Erreur serveur
 */

taskRouter.get("/tasks", taskController.getAllTasks);
taskRouter.get("/tasks/:taskId", taskController.getOneTask);
taskRouter.patch("/tasks/:taskId", taskController.updateTask);

module.exports = taskRouter;
