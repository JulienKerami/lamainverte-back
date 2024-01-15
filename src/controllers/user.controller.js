const { User } = require('../models/index.model');
const emailValidator = require("email-validator");
const bcrypt = require('bcrypt');

// Fonction qui crée un user à partir des données envoyées en front
async function createUser(req, res) {

  try {
    const {firstname, lastname, email, password} = req.body;

    // Gérer les erreurs possibles avec des if : contrôle de firstname qui est une sstring, lastname aussi, vérifier qu'il y a bien les 2 informations not null     (missing)
    
    
    // Vérifier que le password est bien une string
    // Vérifier que l'email n'est pas déjà utilisé
    // Vérifier que le password fait au moins 8 caractères

    // Vérifier que les 2 champs email et password obligatoires sont bien présents
    if(!email || !password) {
      res.status(400).json({message: "Missing email or password"});
      return;
    }

    // Vérifier que l'email est bien validé
    if(!emailValidator.validate(email)){
      res.status(400).json({message: "Email is not valid"});
      return;
    }

    
    // Vérifier que firstname et lastname sont bien des strings si ils existent

    if(firstname && typeof firstname !== "string") {
      res.status(400).json({message: "Firstname must be a string"});
      return;
    }

    if(lastname && typeof lastname !== "string") {
      res.status(400).json({message: "Lastname must be a string"});
      return;
    }

    // on hash le mot de passe
    const encryptedPassword = await bcrypt.hash(password, 10);

    // on inscrit l'utilisateur en base de données
    const user = await User.create({
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: encryptedPassword
    });
    res.status(200).json(user);
    
  } catch (error) {
    res.status(500).json(error);
  }

}


function userPage(_, res) {
  res.send("Page user");
}

module.exports = {
  createUser,
  userPage
};
