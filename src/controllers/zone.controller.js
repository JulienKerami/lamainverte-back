//const { User } = require('../models/index.model');
const { Zone } = require('../models/index.model');

async function getAllZones(req, res) {

  const userId = 2; // TODO: pour faire des essais, à voir comment on récupère l'id de l'utilisateur connecté

  try {
    const zones = await Zone.findAll({ where: { user_id: userId } });
    res.status(200).json(zones);

  } catch (error) {
    res.status(500).json(error);
  }
}


async function createZone(req, res) {

  try {
    const {name, userId} = req.body;

    const zone = await Zone.create({
      name: name,
      user_id: userId
    
    });

    res.status(200).json(zone);

  } catch (error) {
    res.status(500).json(error);
  }
}



module.exports = {
  getAllZones,
  createZone
};