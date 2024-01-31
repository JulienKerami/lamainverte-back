const { Router } = require("express");
const taskController = require("../controllers/task.controller");
const taskRouter = Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Récupérer toutes les tâches à faire pour un utilisateur donné
 *     description: Renvoie toutes les tâches ayant un status_code de 1 pour l'utilisateur authentifié.
 *     responses:
 *       200:
 *         description: Succès - renvoie la liste de toutes les tâches
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Erreur interne du serveur"
 * /tasks/{taskId}:
 *   get:
 *     summary: Récupérer une tâche spécifique par son ID
 *     parameters:
 *       - name: taskId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Succès - renvoie la tâche spécifiée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Erreur interne du serveur"
 *   put:
 *     summary: Mettre à jour une tâche spécifique
 *     parameters:
 *       - name: taskId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status_code:
 *                 type: integer
 *                 example: 2
 *               effective_date:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-06-15T14:00:00Z"
 *               comment:
 *                 type: string
 *                 example: "Tâche terminée avec succès"
 *     responses:
 *       200:
 *         description: Succès - renvoie la tâche mise à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Erreur interne du serveur"
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 *           example: "planting"
 *         status:
 *           type: string
 *           example: "A faire"
 *         status_code:
 *           type: integer
 *           example: 1
 *         start_date_period:
 *           type: string
 *           format: date-time
 *           example: "2024-04-01T00:00:00Z"
 *         end_date_period:
 *           type: string
 *           format: date-time
 *           example: "2024-05-01T00:00:00Z"
 *         effective_date:
 *           type: string
 *           format: date-time
 *           example: "2024-04-15T14:00:00Z"
 *         comment:
 *           type: string
 *           example: "Nécessite un suivi supplémentaire"
 *         vegetable_id:
 *           type: integer
 *           example: 101
 */

taskRouter.get("/tasks", taskController.getAllTasks);
taskRouter.get("/tasks/:taskId", taskController.getOneTask);
taskRouter.patch("/tasks/:taskId", taskController.updateTask);

module.exports = taskRouter;
