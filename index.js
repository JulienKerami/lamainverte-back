// Charger les variables d'environnement
require("dotenv/config");

// Import des modules
const express = require("express"); // module express classique
const { rateLimit } = require("express-rate-limit"); // module express pour éviter les DDOS
// const cors = require("cors"); // Sécurité avec le module CORS TODO
const sanitizeHtml = require("sanitize-html"); // SECURITE doc : https://www.npmjs.com/package/sanitize-html

const router = require("./src/routers");


// Creation app Express
const app = express();

// middleware rate limiting
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    limit: 1000 // 1000 requête en 1 minute
  });
  app.use(limiter);


// Ajout d'un body parser
app.use(express.json()); // Body parser pour les body de format application/json
app.use(express.urlencoded({ extended: true })); // Body parser pour les body de format application/x-www-urlencoded


// TODO : penser à mettre le middleware sanitize html ici pour retirer le code malveillant du body, voir exemple S06 

// Configuration du serveur
app.use(router);

// Lancer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

