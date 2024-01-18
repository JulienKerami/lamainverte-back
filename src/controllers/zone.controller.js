const { Zone } = require('../models/index.model');
const { Vegetable } = require('../models/index.model');

async function createZone(req, res) {

  try {
    const {name, userId} = req.body; // TODO : Vérifier comment arrive le userId
    console.log(req.body);

    const zone = await Zone.create({
      user_id: userId,
      name: name     
    
    });

    res.status(200).json(zone);

  } catch (error) {
    res.status(500).json(error);
  }
}


async function deleteZone(req, res) {
  try {
    const zoneId = parseInt(req.params.zoneId);

    // Recherche et suppression des Vegetables associés en premier
    await Vegetable.destroy({
      where: {
        zone_id: zoneId,
      },
    });

    // Vous pouvez maintenant supprimer en toute sécurité la Zone
    await Zone.destroy({
      where: {
        id: zoneId,
      },
    });

    res.status(204).end();
  } catch (error) {
    res.status(500).json(error);
  }
}


async function updateZone(req, res) {
  try {
    const zoneId = parseInt(req.params.zoneId);

    const {name}=req.body;

    const zone = await Zone.findByPk(zoneId);

    await zone.update({name : name});

    res.status(200).json(zone);
  } catch (error) {
    res.status(500).json(error);
  }

}



module.exports = {
  createZone,
  deleteZone,
  updateZone

};