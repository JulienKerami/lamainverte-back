const { Router } = require("express");

const mainRouter = require("./main.routeur");
const userRouter = require("./user.router");
const zoneRouter = require("./zone.routeur");
const vegetableRouter = require("./vegetable.routeur");



// Création du principal router
const router = Router();

// Plug toutes nos routes API
router.use(mainRouter);
router.use(userRouter);
router.use(zoneRouter);
router.use(vegetableRouter);


// Export du router
module.exports = router;