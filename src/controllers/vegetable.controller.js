const { Vegetable } = require('../models/index.model');

async function getAllVegetables(req, res) {

  try {
    const vegetables = await Vegetable.findAll();
    console.log(vegetables);

    res.status(200).json(vegetables);

  } catch (error) {
    res.status(500).json(error);
  }
}

async function createVegetable(req, res) {
  
  try {
    const {userId, zoneId, familyId, growthTime, variety, comment} = req.body; // TODO : Vérifier comment arrive le userId
    console.log(req.body);
  
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