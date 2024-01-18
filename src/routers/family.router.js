const { Router } = require("express");
const familyController = require('../controllers/family.controller');
const familyRouter = Router();

familyRouter.get("/families", familyController.getAllFamilies);

module.exports = familyRouter;