const { Router } = require("express");
const vegetableController = require("../controllers/vegetable.controller");
const vegetableRouter = Router();

/**
 * @swagger
 * /vegetables:
 *   get:
 *     summary: Récupérer la liste de toutes les zones, les plants et les tâches associées d'un utilisateur
 *     responses:
 *       200:
 *         description: Succès renvoie la liste de toutes les zones, les plants et les tâches associées d'un utilisateur. Chaque légume inclut maintenant un 'status' et un 'status_code'.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 zones:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       name:
 *                         type: string
 *                       vegetable:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: number
 *                             emergence:
 *                               type: number
 *                             growthTime:
 *                               type: number
 *                             variety:
 *                               type: string
 *                             comment:
 *                               type: string
 *                             status:
 *                               type: string
 *                               description: Statut du légume basé sur les tâches (e.g., "A récolter", "A planter").
 *                             status_code:
 *                               type: number
 *                               description: Code numérique associé au statut du légume.
 *                             task:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   id:
 *                                     type: number
 *                                   type:
 *                                     type: string
 *                                   status:
 *                                     type: string
 *                                   status_code:
 *                                     type: number
 *                                   start_date_period:
 *                                     type: string
 *                                     format: date
 *                                   end_date_period:
 *                                     type: string
 *                                     format: date
 *       500:
 *         description: Erreur serveur
 */

vegetableRouter.get("/vegetables", vegetableController.getZonesVegetablesTasks); //Remplacement de getAllVegetable par getZonesVegetablesTasks
vegetableRouter.post("/vegetables", vegetableController.createVegetable);
vegetableRouter.delete(
  "/vegetables/:vegetableId",
  vegetableController.deleteVegetable
);
//vegetableRouter.patch("/vegetables/:vegetableId", vegetableController.updateVegetable);

module.exports = vegetableRouter;
