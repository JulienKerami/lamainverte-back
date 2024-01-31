const { Router } = require("express");
const userController = require("../controllers/user.controller");
const userRouter = Router();
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     description: Enregistre un nouvel utilisateur dans la base de données.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 example: "Sylvain"
 *               lastname:
 *                 type: string
 *                 example: "OClock"
 *               email:
 *                 type: string
 *                 example: "Sylvain.OClock@coincoin.com"
 *               password:
 *                 type: string
 *                 example: "L3adFrontFor3v3r"
 *     responses:
 *       200:
 *         description: Utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "User created"
 *       400:
 *         description: Données manquantes ou invalides
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Missing email or password"
 *       409:
 *         description: Conflit, email déjà utilisé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Email already used"
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
 *
 * /login:
 *   post:
 *     summary: Connecter un utilisateur
 *     description: Authentifie un utilisateur et renvoie un token JWT.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "Sylvain.OClock@coincoin.com"
 *               password:
 *                 type: string
 *                 example: "L3adFrontFor3v3r"
 *     responses:
 *       200:
 *         description: Authentification réussie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *               example:
 *                 message: "Authentification OK"
 *                 token: "jwt.token.here"
 *       401:
 *         description: Authentification invalide
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Autentification invalide, vérifiez les données saisies"
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
 */

userRouter.post("/signin", userController.createUser);
userRouter.post("/login", userController.loginUser);

module.exports = userRouter;
