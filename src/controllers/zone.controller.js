//const { User } = require('../models/index.model');
const { Zone } = require('../models/index.model');

async function getAllZones(req, res) {

  try {
    const userId = parseInt(req.params.userId);
    const zones = await Zone.findAll({ where: { user_id: userId } });
    res.status(200).json(zones);

  } catch (error) {
    res.status(500).json(error);
  }
}


async function createZone(req, res) {

  try {
    const userId = parseInt(req.params.userId);
    const {name} = req.body;

    const zone = await Zone.create({
      name: name,
      user_id: userId
    
    });

    res.status(200).json(zone);

  } catch (error) {
    res.status(500).json(error);
  }
}

async function getOneZone(req, res) {
  try {
    
    const zoneId = parseInt(req.params.zoneId);

    const zone = await Zone.findByPk(zoneId);
    res.status(200).json(zone);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteZone(req, res) {
  try {
    const zoneId = parseInt(req.params.zoneId);

    const zone = await Zone.findByPk(zoneId);
    await zone.destroy();

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
  getAllZones,
  createZone,
  getOneZone,
  deleteZone,
  updateZone

};