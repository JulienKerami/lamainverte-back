const { Vegetable, Zone, User, Task } = require("../models/index.model");

const { getUserIdFromToken } = require("./utils");

async function getZonesVegetablesTasks(req, res) {
  const userId = getUserIdFromToken(req.headers.authorization);

  //const userId = 1;
  try {
    const zones = await User.findByPk(userId, {
      include: {
        model: Zone,
        as: "zone",
        include: {
          model: Vegetable,
          as: "vegetable",
          include: {
            model: Task,
            as: "task",
          },
        },
      },
    });
    //console.log(zones);

    // je crée une const avec la date actuelle

    const currentDate = new Date();

    // je récupère l'objet zones
    // pour chaque zone, je récupère les vegetables
    // pour chaque vegetable, je récupère les tâches
    zones.zone.forEach((zone) => {
      zone.vegetable.forEach((vegetable) => {
        vegetable.task.forEach((task) => {
          // je crée une const avec la date de start_date_period et une const avec la date de end_date_period
          const startDate = new Date(task.start_date_period);
          const endDate = new Date(task.end_date_period);

          // si la task est de type harvesting, que le status_code == 1 et que la date actuelle  est entre la start_date_period et la end_date_period, alors je crée met une propriété "status" : "A récolter" dans l'objet vegetable

          if (
            task.type === "harvest" &&
            task.status_code === 1 &&
            currentDate >= startDate &&
            currentDate <= endDate
          ) {
            vegetable.dataValues.status = "A récolter";
            vegetable.dataValues.status_code = 5;
          }
          // si la task est de type planting, que le status_code == 1 et que la date actuelle  est entre la start_date_period et la end_date_period, alors je crée met une propriété "status" : "A planter" dans l'objet vegetable
          if (
            task.type === "planting" &&
            task.status_code === 1 &&
            currentDate >= startDate &&
            currentDate <= endDate
          ) {
            vegetable.dataValues.status = "A planter";
            vegetable.dataValues.status_code = 3;
          }
          // si la task est de type seeding, que le status_code == 1 et que la date actuelle  est entre la start_date_period et la end_date_period, alors je crée met une propriété "status" : "A semer" dans l'objet vegetable
          if (
            task.type === "seeding" &&
            task.status_code === 1 &&
            currentDate >= startDate &&
            currentDate <= endDate
          ) {
            vegetable.dataValues.status = "A semer";
            vegetable.dataValues.status_code = 1;
          }
          // si la task est de type harvesting, que le status_code == 1 et que la date actuelle est inférieure à la date de start_date_period, alors je crée met une propriété "status" : "En attente de récolte" dans l'objet vegetable
          if (
            task.type === "harvest" &&
            task.status_code === 1 &&
            currentDate < startDate
          ) {
            vegetable.dataValues.status = "En attente de la période de récolte";
            vegetable.dataValues.status_code = 4;
          }

          // si la task est de type planting, que le status_code == 1 et que la date actuelle est inférieure à la date de start_date_period, alors je crée met une propriété "status" : "En attente de plantation" dans l'objet vegetable

          if (
            task.type === "planting" &&
            task.status_code === 1 &&
            currentDate < startDate
          ) {
            vegetable.dataValues.status =
              "En attente de la période de plantation";
            vegetable.dataValues.status_code = 2;
          }

          // si la task est de type seeding, que le status_code == 1 et que la date actuelle est inférieure à la date de start_date_period, alors je crée met une propriété "status" : "En attente de semis" dans l'objet vegetable

          if (
            task.type === "seeding" &&
            task.status_code === 1 &&
            currentDate < startDate
          ) {
            vegetable.dataValues.status = "En attente de la période de semis";
            vegetable.dataValues.status_code = 0;
          }
          //console.log(task);
        });
      });
    });

    const serializedZones = zones.zone.map((zone) => ({
      ...zone.get({ plain: true }), // Utilise get({ plain: true }) pour obtenir un objet simple
      vegetable: zone.vegetable.map((vegetable) => ({
        ...vegetable.get({ plain: true }),
        status: vegetable.dataValues.status,
        status_code: vegetable.dataValues.status_code,
      })),
    }));

    res.status(200).json({ zones: serializedZones }); // Envoyez les zones sérialisées
  } catch (error) {
    res.status(400).json(error);
  }
}

async function createVegetable(req, res) {
  try {
    // Récupérer l'id de l'utilisateur connecté
    const userId = getUserIdFromToken(req.headers.authorization);

    // Récupérer les données envoyées par l'utilisateur
    const {
      zoneId,
      familyId,
      emergence,
      growthTime,
      variety,
      comment,
      start_date_period_seeding,
      end_date_period_seeding,
      start_date_period_planting,
      end_date_period_planting,
      start_date_period_harvest,
      end_date_period_harvest,
    } = req.body;

    // vérifier que  start_date_period_planting, end_date_period_planting,     start_date_period_harvest, end_date_period_harvest sont fournies

    if (
      !start_date_period_planting ||
      !end_date_period_planting ||
      !start_date_period_harvest ||
      !end_date_period_harvest
    ) {
      res.status(400).json({
        message:
          "Start date period planting, end date period planting, start date period harvest and end date period harvest must be provided",
      });
      return;
    }

    // Transformation des dates fournies en format string en objet Date
    const start_date_period_seeding_date = new Date(start_date_period_seeding);
    const end_date_period_seeding_date = new Date(end_date_period_seeding);
    // TODO : finir les autres dates, en attente du front

    // vérifier que les dates sont bien des dates

    if (
      !(
        start_date_period_seeding_date instanceof Date &&
        start_date_period_seeding_date instanceof Date
      )
    ) {
      res
        .status(400)
        .json({ message: "Start date period seeding must be a date" });
      return;
    }

    // TODO : finir les autres dates, en attente du front

    // vérifier s'il y a une variety, que c'est une string
    if (variety && typeof variety !== "string") {
      res.status(400).json({ message: "Variety must be a string" });
      return;
    }

    // vérifier s'il y a un commentaire, que c'est une string
    if (comment && typeof comment !== "string") {
      res.status(400).json({ message: "Comment must be a string" });
      return;
    }

    // vérifier s'il y a une emgergence,  que c'est un nombre
    if (emergence && typeof growthTime !== "number") {
      res.status(400).json({ message: "Growth time must be a number" });
      return;
    }

    // vérifier qu'il y a un growthTime, et que c'est un nombre
    if (!growthTime || typeof growthTime !== "number") {
      res.status(400).json({ message: "Growth time must be a number" });
      return;
    }

    // vérifier qu'il y a un zoneId, et que c'est un nombre
    if (!zoneId || typeof zoneId !== "number") {
      res.status(400).json({ message: "Zone id must be a number" });
      return;
    }

    // vérifier qu'il y a un familyId, et que c'est un nombre
    if (!familyId || typeof familyId !== "number") {
      res.status(400).json({ message: "Family id must be a number" });
      return;
    }

    // Créer le plant en base de données
    const vegetable = await Vegetable.create({
      user_id: userId,
      zone_id: zoneId,
      family_id: familyId,
      emergence: emergence,
      growth_time: growthTime,
      variety: variety,
      comment: comment,
    });

    // vérifier que le front envoie une date de seeding, si oui, créer une tâche de seeding
    if (start_date_period_seeding && end_date_period_seeding) {
      await Task.create({
        type: "seeding",
        status: "A faire",
        status_code: 1,
        start_date_period: start_date_period_seeding_date,
        end_date_period: end_date_period_seeding_date,
        vegetable_id: vegetable.id,
      });
    }

    // créer une tâche une tâche planting
    let statusCode =
      start_date_period_seeding && end_date_period_seeding ? 0 : 1;

    await Task.create({
      type: "planting",
      status: "En attente",
      status_code: statusCode,
      start_date_period: start_date_period_planting,
      end_date_period: end_date_period_planting,
      vegetable_id: vegetable.id,
    });

    // créer une tâche de harvest
    await Task.create({
      type: "harvest",
      status: "En attente",
      status_code: 0,
      start_date_period: start_date_period_harvest,
      end_date_period: end_date_period_harvest,
      vegetable_id: vegetable.id,
    });

    res.status(200).json({ message: "Vegetable created" });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteVegetable(req, res) {
  try {

    const vegetableId = parseInt(req.params.vegetableId);
  
    await Vegetable.destroy({

      where: {
        id: vegetableId,
      },
    });

    res.status(204).end();
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  createVegetable,
  getZonesVegetablesTasks,
  deleteVegetable,
};
