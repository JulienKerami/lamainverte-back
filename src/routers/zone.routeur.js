const { Router } = require("express");
const zoneController = require('../controllers/zone.controller');
const zoneRouter = Router();


zoneRouter.post("/zones", zoneController.createZone);
zoneRouter.delete("/zones/:zoneId", zoneController.deleteZone);
zoneRouter.patch("/zones/:zoneId", zoneController.updateZone);

module.exports = zoneRouter;