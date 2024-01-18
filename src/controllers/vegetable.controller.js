const { Vegetable, Zone } = require('../models/index.model');


const { getUserIdFromToken } = require('./utils');


async function getAllVegetables(req, res) {

  try {
    const userId = getUserIdFromToken(req.headers.authorization);
    

    // Récupérer toutes les zones de l'utilisateur connecté
    const zones = await Zone.findAll({
      where: {
        user_id: userId,
      },
    });

    // Récupérer les id des zones de l'utilisateur connecté
    const zoneIds = zones.map(zone => zone.dataValues.id);
    
   

    // Récupérer les légumes des zones de l'utilisateur connecté
    const vegetables = await Vegetable.findAll(
      {
        where: {
          zone_id: zoneIds
        }
      }
    );

    console.log(vegetables);
  
    res.status(200).json(vegetables);

  } catch (error) {
    res.status(500).json(error);
  }
}

async function createVegetable(req, res) {
  
  try {

    // Récupérer l'id de l'utilisateur connecté
    const userId = getUserIdFromToken(req.headers.authorization);

    // Récupérer les données envoyées par l'utilisateur
    const {zoneId, familyId, growthTime, variety, comment} = req.body;
   
  
    const vegetable = await Vegetable.create({
      user_id: userId,
      zone_id: zoneId,
      family_id: familyId,
      growth_time: growthTime,
      variety: variety,
      comment: comment     
    });
  
    res.status(200).json(vegetable);
  
  } catch (error) {
    res.status(500).json(error);
  }
}



module.exports =  {
  getAllVegetables, 
  createVegetable
};