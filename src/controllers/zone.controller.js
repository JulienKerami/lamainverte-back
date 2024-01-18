const { Zone} = require('../models/index.model');

const jwt = require('jsonwebtoken');

function getUserIdFromToken(authorizationHeader) {
  const token = authorizationHeader.split(' ')[1];
  return jwt.decode(token).id;
}

async function createZone(req, res) {
  try {
    const userId = getUserIdFromToken(req.headers.authorization);

    const { name } = req.body;

    // Do not allow an empty "name" field
    if (!name) {
      res.status(400).json({ message: "Missing name" });
      return;
    }

    // Check if the name is already used
    const nameAlreadyUsed = await Zone.findOne({
      where: {
        user_id: userId,
        name: name,
      },
    });

    if (nameAlreadyUsed) {
      res.status(400).json({ message: "Name already used" });
      return;
    }

    const zone = await Zone.create({
      user_id: userId,
      name: name,
    });

    res.status(200).json(zone);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteZone(req, res) {
  try {
    const zoneId = parseInt(req.params.zoneId);
  
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
    const userId = getUserIdFromToken(req.headers.authorization);

    const zoneId = parseInt(req.params.zoneId);
    const { name } = req.body;

    // Do not allow an empty "name" field
    if (!name) {
      res.status(400).json({ message: "Missing name" });
      return;
    }

    // Check if the name is already used
    const nameAlreadyUsed = await Zone.findOne({
      where: {
        user_id: userId,
        name: name,
      },
    });

    if (nameAlreadyUsed) {
      res.status(400).json({ message: "Name already used" });
      return;
    }

    const zone = await Zone.findByPk(zoneId);

    await zone.update({ name: name });

    res.status(200).json(zone);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  createZone,
  deleteZone,
  updateZone,
};
