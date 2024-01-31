const { Router } = require("express");
const vegetableController = require("../controllers/vegetable.controller");
const vegetableRouter = Router();

/**
 * @swagger
 * /vegetables:
 *   get:
 *     summary: Récupérer les zones, les légumes et les tâches d'un utilisateur
 *     description: Renvoie les zones, avec les légumes et leurs tâches associées, pour un utilisateur authentifié.
 *     responses:
 *       200:
 *         description: Succès - renvoie les zones, les légumes et les tâches
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 zones:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Zone'
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Erreur serveur"
 *
 *
 *   post:
 *     summary: Créer un nouveau légume
 *     description: Enregistre un nouveau légume dans la base de données.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vegetable'
 *     responses:
 *       200:
 *         description: Légume créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Vegetable created"
 *       400:
 *         description: Données invalides
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Start date period planting, end date period planting, start date period harvest and end date period harvest must be provided"
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Erreur serveur"
 *
 * /vegetables/{vegetableId}:
 *   delete:
 *     summary: Supprimer un légume
 *     description: Supprime un légume de la base de données.
 *     parameters:
 *       - name: vegetableId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Légume supprimé avec succès
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Erreur serveur"
 *
 * components:
 *   schemas:
 *     Zone:
 *       type: object
 *       properties:
 *         id:
 *         type: integer
 *         description: L'identifiant unique de la zone
 *         example: 1
 *       name:
 *         type: string
 *         description: Le nom de la zone
 *         example: "Jardin principal"
 *       user_id:
 *         type: integer
 *         description: L'identifiant unique de l'utilisateur associé à cette zone
 *         example: 101
 *     Vegetable:
 *       type: object
 *       properties:
 *         emergence:
 *           type: integer
 *           example: 10
 *         growth_time:
 *           type: integer
 *           example: 60
 *         variety:
 *           type: string
 *           example: "Carotte Nantaise"
 *         comment:
 *           type: string
 *           example: "Semer en ligne"
 *         zone_id:
 *           type: integer
 *           example: 1
 *         family_id:
 *           type: integer
 *           example: 3
 */

vegetableRouter.get("/vegetables", vegetableController.getZonesVegetablesTasks); //Remplacement de getAllVegetable par getZonesVegetablesTasks
vegetableRouter.post("/vegetables", vegetableController.createVegetable);
vegetableRouter.delete(
  "/vegetables/:vegetableId",
  vegetableController.deleteVegetable
);
//vegetableRouter.patch("/vegetables/:vegetableId", vegetableController.updateVegetable);

module.exports = vegetableRouter;
