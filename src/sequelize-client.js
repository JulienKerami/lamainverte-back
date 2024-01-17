// "connection instance" vers notre BDD locale Postgres => une sorte de tunnel de Node.js vers Postgres

require("dotenv/config"); 


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL, {
  define: {
    createdAt: "created_at", // Pour TOUS nos modèles, on leur met le champs `createdAt` mappé (lié) vers le champs `created_at` en BDD
    updatedAt: "updated_at" // Pour TOUS nos modèles, on leur met le champs `updatedAt` mappé (lié) vers le champs `updated_at` en BDD
  }
});

module.exports = sequelize;

//Pour tester temporairement --> Test réussi le 12/01/2024

// sequelize.authenticate()
//   .then(() => { console.log("success !"); })
//   .catch(error => console.error(error));

//Puis lancer "node ./src/models/sequelize-client.js"

