const { Router } = require("express");
const userController = require('../controllers/user.controller');
const userRouter = Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 example: Sylvain
 *               lastname:
 *                 type: string
 *                 example: Le Canard
 *               email:
 *                 type: string
 *                 example: user@lepetitcanardjs.com
 *               password:
 *                 type: string
 *                 example: Coincoin
 *     responses:
 *       200:
 *         description: Succès renvoie l'utilisateur créé
 *       500:
 *         description: Erreur serveur
 * /signin:
 *   post:
 *     summary: Se connecter à l'application
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@lepetitcanardjs.com
 *               password:
 *                 type: string
 *                 example: Coincoin
 *     responses:
 *       200:
 *         description: Succès renvoie l'utilisateur créé
 *       500:
 *         description: Erreur serveur
 */


userRouter.post("/signin", userController.createUser);
userRouter.post("/login", userController.loginUser);

module.exports = userRouter;