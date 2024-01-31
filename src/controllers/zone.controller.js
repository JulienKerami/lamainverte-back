const { Zone } = require("../models/index.model");
const { getUserIdFromToken } = require("./utils");

async function createZone(req, res) {
  try {
    // Récupérer l'id de l'utilisateur connecté
    const userId = getUserIdFromToken(req.headers.authorization);

    // Récupérer les données envoyées par l'utilisateur
    const { name } = req.body;

    // Vérifier que le champs nom n'est pas vide
    if (!name) {
      res.status(400).json({ message: "Missing name" });
      return;
    }

    // Vérifier que le nom n'est pas déjà utilisé
    const nameAlreadyUsed = await Zone.findOne({
      where: {
        user_id: userId,
        name: name,
      },
    });

    if (nameAlreadyUsed) {
      res.status(409).json({ message: "Name already used" }); // erreur 409 pour conflit
      return;
    }

    // Créer la zone
    const zone = await Zone.create({
      user_id: userId,
      name: name,
    });

    res.status(200).json({ message: "Zone created", zone: zone });
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
    console.error(error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
}

async function updateZone(req, res) {
  try {
    // Récupérer l'id de l'utilisateur connecté
    const userId = getUserIdFromToken(req.headers.authorization);

    // Récupérer la zone concernée et les données envoyées par l'utilisateur
    const zoneId = parseInt(req.params.zoneId);
    const { name } = req.body;

    // Vérifier que le champs nom n'est pas vide
    if (!name) {
      res.status(400).json({ message: "Missing name" });
      return;
    }

    // Vérifier que le nom n'est pas déjà utilisé
    const nameAlreadyUsed = await Zone.findOne({
      where: {
        user_id: userId,
        name: name,
      },
    });

    if (nameAlreadyUsed) {
      res.status(409).json({ message: "Name already used" }); // erreur 409 pour conflit
      return;
    }

    // Trouver la zone et la mettre à jour
    const zone = await Zone.findByPk(zoneId);

    await zone.update({ name: name });

    res.status(200).json(zone);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Zone not found" });
  }
}

module.exports = {
  createZone,
  deleteZone,
  updateZone,
};
