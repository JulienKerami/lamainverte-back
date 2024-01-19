const { Router } = require("express");
const vegetableController = require('../controllers/vegetable.controller');
const vegetableRouter = Router();


vegetableRouter.get("/vegetables", vegetableController.getZonesVegetablesTasks); //Remplacement de getAllVegetable par getZonesVegetablesTasks
vegetableRouter.post("/vegetables", vegetableController.createVegetable);
vegetableRouter.delete("/vegetables/:vegetableId", vegetableController.deleteVegetable);
//vegetableRouter.patch("/vegetables/:vegetableId", vegetableController.updateVegetable);

module.exports = vegetableRouter;