const { User } = require('../models/index.model');

// Fonction qui crée un user à partir des données envoyées en front
async function createUser(_, res) {
  const userTest = {
    firstname: "Julo",
    lastname: "le jardinier",
    email: "potager@yahoo.fr",
    password: "courgette"
  };
  // Gérer les erreurs possibles avec des if : contrôle de firstname qui est une sstring, lastname aussi, vérifier qu'il y a bien les 4 informations (missing)
  const user = await User.create({
    first_name: userTest.firstname,
    last_name: userTest.lastname,
    email: userTest.email,
    password: userTest.password
  });
  res.status(200).json(user);
}


function userPage(_, res) {
  res.send("Page user");
}

module.exports = {
  createUser,
  userPage
};
