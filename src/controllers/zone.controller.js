//const { User } = require('../models/index.model');
const { Zone } = require('../models/index.model');

async function getAllZones(req, res) {
  try {
    const zones = await Zone.findAll();
    res.json(zones);
  } catch (error) {
    res.status(500).json(error);
  }
}


module.exports = {
  getAllZones
};