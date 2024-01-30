// Charger les variables d'environnement
require("dotenv/config");

// Import des modules
const express = require("express"); // module express classique
const { rateLimit } = require("express-rate-limit"); // module express pour éviter les DDOS
const cors = require("cors"); // Sécurité avec le module CORS TODO

const sanitizeHtml = require("sanitize-html"); // SECURITE doc : https://www.npmjs.com/package/sanitize-html

const swaggerJsdoc = require("swagger-jsdoc"); // module pour générer la doc swagger
const swaggerUi = require("swagger-ui-express"); // module pour afficher la doc swagger

const router = require("./src/routers");

// Creation app Express
const app = express();

app.use(
  cors({
    // Ce middleware ajoute un header "Access-Control-Allow-Origin: "...." à la réponse que Express renvoie au client !
    origin: "*", // Ici, pour ne pas s'embêter, et parce qu'on a pas de donner sensible, je vous propose d'autoriser TOUS les domaines à accéder à notre API. Techniquement, il faudrait juste autoriser notre front !
  })
);

// middleware rate limiting
const limiter = rateLimit(
  {
    windowMs: 1 * 60 * 1000, // 1 minute
    limit: 1000, // 1000 requête en 1 minute
  },
  {
    validate: { xForwardedForHeader: false },
  }
);

app.use(limiter);

// Ajout d'un body parser
app.use(express.json()); // Body parser pour les body de format application/json
app.use(express.urlencoded({ extended: true })); // Body parser pour les body de format application/x-www-urlencoded


// Retirer tout le code malveillant du body par le biais du middleware de sanitize-html
// Suppression des balises HTML et echappement des caractères spéciaux pour éviter les injections XSS
app.use((req, res, next) => {

  Object.keys(req.body).forEach(key => { 
    if (typeof req.body[key] === "string") {
      req.body[key] = sanitizeHtml(req.body[key]);
    }
  });

  next();
});


// configuration de swagger

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "La Main Verte",
      version: "0.1.0",
      description: "API pour l'application La Main Verte",
    },
  },
  apis: ["./src/routers/*.js"],
};

const specs = swaggerJsdoc(options);

// Configuration du dossier public
app.use(express.static("src/public"));

// Configuration du serveur
app.use("/api/doc", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api", router);

// Lancer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
