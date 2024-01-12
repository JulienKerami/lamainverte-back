const { Router } = require("express");

const mainRouter = require("./main.routeur");
const userRouter = require("./user.router");



// Création du principal router
const router = Router();

// Plug toutes nos routes API
router.use(mainRouter);
router.use(userRouter);


// Export du router
module.exports = router;