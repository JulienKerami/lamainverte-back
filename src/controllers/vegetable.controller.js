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
    const {zoneId, familyId, growthTime, variety, comment, start_date_period_planting, end_date_period_planting} = req.body;


    // vérifier les dates que va nous envoyer le front

    // vérifier s'il y a une variety, que c'est une string
    if(variety && typeof variety !== "string") {
      res.status(400).json({message: "Variety must be a string"});
      return;
    }

    // vérifier s'il y a un commentaire, que c'est une string
    if(comment && typeof comment !== "string") {
      res.status(400).json({message: "Comment must be a string"});
      return;
    }

    // vérifier qu'il y a un growthTime, et que c'est un nombre
    if(!growthTime || typeof growthTime !== "number") {
      res.status(400).json({message: "Growth time must be a number"});
      return;
    }

    // vérifier qu'il y a un zoneId, et que c'est un nombre
    if(!zoneId || typeof zoneId !== "number") {
      res.status(400).json({message: "Zone id must be a number"});
      return;
    }

    // vérifier qu'il y a un familyId, et que c'est un nombre
    if(!familyId || typeof familyId !== "number") {
      res.status(400).json({message: "Family id must be a number"});
      return;
    }
   
    // Créer le plant en base de données
    const vegetable = await Vegetable.create({
      user_id: userId,
      zone_id: zoneId,
      family_id: familyId,
      growth_time: growthTime,
      variety: variety,
      comment: comment,
    });

    // création des tâches liées au plant

    // vérifier que la famille du plant a une période de semi (start_date_day_seeding n'est pas NULL)
    
    // si oui, créer une tâche de seeding

    // créer une tâche une tâche planting
    const plantingTask = await Task.create({
      type : "planting",
      status : "A faire",
      start_date_period : start_date_period_planting,// TODO A FAIRE
      end_date_period : end_date_period_planting,// TODO A FAIRE
      effective_date : null,
      comment : null,
      vegetable_id : vegetable.id
    });  

    // créer une tâche de harvest
  
    res.status(200).json({vegetable, plantingTask});
    
  } catch (error) {
    res.status(500).json(error);
  }
}
 


module.exports =  {
  createVegetable,
  getZonesVegetablesTasks
};