const { Router } = require("express");
const zoneController = require('../controllers/zone.controller');
const zoneRouter = Router();

zoneRouter.get("/zone", zoneController.getAllZones);
zoneRouter.post("/zone", zoneController.createZone);

zoneRouter.get("/zone/:zoneId", zoneController.getOneZone);
zoneRouter.delete("/zone/:zoneId", zoneController.deleteZone);

module.exports = zoneRouter;