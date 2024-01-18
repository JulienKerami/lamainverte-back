const { Router } = require("express");
const vegetableController = require('../controllers/vegetable.controller');
const vegetableRouter = Router();


vegetableRouter.get("/vegetables", vegetableController.getAllVegetables);
vegetableRouter.post("/vegetables", vegetableController.createVegetable);
//vegetableRouter.delete("/vegetables/:vegetableId", vegetableController.deleteVegetabl);
//vegetableRouter.patch("/vegetables/:vegetableId", vegetableController.updateVegetable);

module.exports = vegetableRouter;