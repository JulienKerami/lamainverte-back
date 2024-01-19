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
    const {zoneId, familyId, growthTime, variety, comment, 
      start_date_period_seeding, end_date_period_seeding,
      start_date_period_planting, end_date_period_planting,
      start_date_period_harvest, end_date_period_harvest} = req.body;

      // format attendu sur la date : 2024-01-31

    //   // converti les dates en format date
    //   const start_date_period_seeding_date = new Date(start_date_period_seeding);
    //   const end_date_period_seeding_date = new Date(end_date_period_seeding);
    //   const start_date_period_planting_date = new Date(start_date_period_planting);
    //   const end_date_period_planting_date = new Date(end_date_period_planting);
    //   const start_date_period_harvest_date = new Date(start_date_period_harvest);
    //   const end_date_period_harvest_date = new Date(end_date_period_harvest);
      

    //         // Fais un console log de toutes les dates avec leur nom et leur type
    //         console.log("start_date_period_seeding", start_date_period_seeding_date, typeof start_date_period_seeding_date);
    //         console.log("end_date_period_seeding", end_date_period_seeding_date, typeof end_date_period_seeding_date);
    //         console.log("start_date_period_planting", start_date_period_planting_date, typeof start_date_period_planting_date);
    //         console.log("end_date_period_planting", end_date_period_planting_date, typeof end_date_period_planting_date);
    //         console.log("start_date_period_harvest", start_date_period_harvest_date, typeof start_date_period_harvest_date);
    //         console.log("end_date_period_harvest", end_date_period_harvest_date, typeof end_date_period_harvest_date);
      

    // // vérifier que les dates sont au format date 2024-01-31 

    // if(start_date_period_seeding_date && start_date_period_seeding_date instanceof Date) {
    //   res.status(400).json({message: "Start date period seeding must be a date"});
    //   return;
    // }

    // if(end_date_period_seeding && typeof end_date_period_seeding_date !== "date") {
    //   res.status(400).json({message: "End date period seeding must be a date"});
    //   return;
    // }

    // if(start_date_period_planting && typeof start_date_period_planting_date !== "date") {
    //   res.status(400).json({message: "Start date period planting must be a date"});
    //   return;
    // }

    // if(end_date_period_planting && typeof end_date_period_planting_date !== "date") {
    //   res.status(400).json({message: "End date period planting must be a date"});
    //   return;
    // }

    // if(start_date_period_harvest && typeof start_date_period_harvest_date !== "date") {
    //   res.status(400).json({message: "Start date period harvest must be a date"});
    //   return;
    // }

    // if(end_date_period_harvest && typeof end_date_period_harvest_date !== "date") {
    //   res.status(400).json({message: "End date period harvest must be a date"});
    //   return;
    // }

    // vérifier que  start_date_period_planting, end_date_period_planting,     start_date_period_harvest, end_date_period_harvest sont fournies

    if(!start_date_period_planting || !end_date_period_planting || !start_date_period_harvest || !end_date_period_harvest) {
      res.status(400).json({message: "Start date period planting, end date period planting, start date period harvest and end date period harvest must be provided"});
      return;
    }

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

    // vérifier que le front envoie une date de seeding
    
    // si oui, créer une tâche de seeding


      // créer une tâche de seeding

      if(start_date_period_seeding && end_date_period_seeding) {
        const seedingTask = await Task.create({
          type : "seeding",
          status : "A faire",
          start_date_period : start_date_period_seeding,// TODO A FAIRE
          end_date_period : end_date_period_seeding,// TODO A FAIRE
          vegetable_id : vegetable.id
        });
      }

    // créer une tâche une tâche planting
    const plantingTask = await Task.create({
      type : "planting",
      status : "A faire",
      start_date_period : start_date_period_planting,// TODO A FAIRE
      end_date_period : end_date_period_planting,// TODO A FAIRE
      vegetable_id : vegetable.id
    });  

    // créer une tâche de harvest
    const harvestTask = await Task.create({
      type : "harvest",
      status : "A faire",
      start_date_period : start_date_period_harvest,// TODO A FAIRE
      end_date_period : end_date_period_harvest,// TODO A FAIRE
      vegetable_id : vegetable.id
    });

  
    res.status(200).json({message : "Vegetable created"});
    
  } catch (error) {
    res.status(500).json(error);
  }
}
 


module.exports =  {
  createVegetable,
  getZonesVegetablesTasks
};