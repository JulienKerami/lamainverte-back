const { Vegetable, Zone, User, Task } = require('../models/index.model');


const { getUserIdFromToken } = require('./utils');


async function getZonesVegetablesTasks(req, res)  {

  const userId = getUserIdFromToken(req.headers.authorization);

  //const userId = 1;
  try {
    const zones = await User.findByPk(userId, {
      include: {
        model: Zone,
        as: 'zone',
        include: {
          model: Vegetable,
          as: 'vegetable',
          include: { 
            model: Task,
            as: "task",
          }
        }
      }
    });
    console.log(zones);
    res.status(200).json(zones);
  }

  catch(error) 
  {res.status(400).json(error);}
 
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
  createVegetable,
  getZonesVegetablesTasks
};