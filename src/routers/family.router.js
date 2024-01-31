const { Router } = require("express");
const familyController = require("../controllers/family.controller");
const familyRouter = Router();

/**
 * @swagger
 * /families:
 *   get:
 *     summary: Récupérer la liste de toutes les familles
 *     description: Renvoie toutes les familles enregistrées dans la base de données.
 *     responses:
 *       200:
 *         description: Succès - renvoie la liste de toutes les familles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Family'
 *       500:
 *         description: Erreur serveur interne
 *
 * components:
 *   schemas:
 *     Family:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example : "Ail de printemps"
 *         soil_type:
 *           type: string
 *           example : "Argileux"
 *         vegetable_type:
 *           type: string
 *           example : "Fertile, bien drainé"
 *         watering:
 *           type: string
 *           example : "1 fois/semaine"
 *         weeding:
 *           type: string
 *           example : "1 fois/mois"
 *         emergence:
 *           type: integer
 *           example : 10
 *         growth_time:
 *           type: integer
 *           example : 170
 *         depth:
 *           type: string
 *           example : "2-3 cm"
 *         spacing:
 *           type: string
 *           example : "20 cm"
 *         row_spacing:
 *           type: string
 *           example : "30 cm"
 *         exposure:
 *           type: string
 *           example : "Ensoleillée"
 *         start_date_seeding:
 *           type: string
 *           example : "01-01"
 *         end_date_seeding:
 *           type: string
 *           example : "01-01"
 *         start_date_planting:
 *           type: string
 *           example : "01-01"
 *         end_date_planting:
 *           type: string
 *           example : "01-01"
 *         start_date_harvest:
 *           type: string
 *           example : "01-01"
 *         end_date_harvest:
 *           type: string
 *           example : "01-01"
 *         img_small:
 *           type: string
 *           example : "legume-ail-200.webp"
 *         img_medium:
 *           type: string
 *           example : "legume-ail-500.webp"
 *         img_large:
 *           type: string
 *           example : "legume-ail-800.webp"
 */

familyRouter.get("/families", familyController.getAllFamilies);

module.exports = familyRouter;
