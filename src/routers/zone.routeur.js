const { Router } = require("express");
const zoneController = require('../controllers/zone.controller');
const zoneRouter = Router();

zoneRouter.get("/users/:userId/zones", zoneController.getAllZones);
zoneRouter.post("/users/:userId/zones", zoneController.createZone);

zoneRouter.get("/users/:userId/zones/:zoneId", zoneController.getOneZone);
zoneRouter.delete("/users/:userId/zones/:zoneId", zoneController.deleteZone);
zoneRouter.patch("/users/:userId/zones/:zoneId", zoneController.updateZone);

module.exports = zoneRouter;