const { Router } = require("express");

const mainRouter = require("./main.routeur");
const userRouter = require("./user.router");
const zoneRouter = require("./zone.routeur");
const vegetableRouter = require("./vegetable.routeur");
const taskRouter = require("./task.routeur");
const familyRouter = require("./family.router");

const verifyToken = require("../middlewares/verify");

// Création du principal router
const router = Router();

// Plug toutes nos routes API
router.use(userRouter);

router.use(verifyToken);

router.use(zoneRouter);
router.use(vegetableRouter);
router.use(familyRouter);
router.use(taskRouter);

// Export du router
module.exports = router;
