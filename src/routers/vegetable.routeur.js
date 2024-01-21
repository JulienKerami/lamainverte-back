const { Router } = require("express");
const vegetableController = require('../controllers/vegetable.controller');
const vegetableRouter = Router();

/**
 * @swagger
 * /vegetables:
 *   get:
 *     summary: Récupérer la liste de toutes les zones, les plants et les tâches associées d'un utilisateur
 *     responses:
 *       200:
 *         description: Succès renvoie la liste de toutes les zones, les plants et les tâches associées d'un utilisateur
 *       500:
 *         description: Erreur serveur
 *   post:
 *     summary: Créer un nouveau légume
 *     description: Crée un nouveau légume et des tâches associées dans la base de données.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - zoneId
 *               - familyId
 *               - growthTime
 *               - start_date_period_planting
 *               - end_date_period_planting
 *               - start_date_period_harvest
 *               - end_date_period_harvest
 *             properties:
 *               zoneId:
 *                 type: number
 *                 description: L'ID de la zone
 *               familyId:
 *                 type: number
 *                 description: L'ID de la famille
 *               growthTime:
 *                 type: number
 *                 description: Le temps de croissance
 *               variety:
 *                 type: string
 *                 description: La variété du légume
 *               comment:
 *                 type: string
 *                 description: Un commentaire sur le légume
 *               start_date_period_seeding:
 *                 type: string
 *                 format: date
 *                 description: Date de début pour le semis
 *               end_date_period_seeding:
 *                 type: string
 *                 format: date
 *                 description: Date de fin pour le semis
 *               start_date_period_planting:
 *                 type: string
 *                 format: date
 *                 description: Date de début pour la plantation
 *               end_date_period_planting:
 *                 type: string
 *                 format: date
 *                 description: Date de fin pour la plantation
 *               start_date_period_harvest:
 *                 type: string
 *                 format: date
 *                 description: Date de début pour la récolte
 *               end_date_period_harvest:
 *                 type: string
 *                 format: date
 *                 description: Date de fin pour la récolte
 *     responses:
 *       200:
 *         description: Légume créé avec succès
 *       400:
 *         description: Données invalides fournies
 *       500:
 *         description: Erreur serveur
 */




vegetableRouter.get("/vegetables", vegetableController.getZonesVegetablesTasks); //Remplacement de getAllVegetable par getZonesVegetablesTasks
vegetableRouter.post("/vegetables", vegetableController.createVegetable);
vegetableRouter.delete("/vegetables/:vegetableId", vegetableController.deleteVegetable);
//vegetableRouter.patch("/vegetables/:vegetableId", vegetableController.updateVegetable);

module.exports = vegetableRouter;