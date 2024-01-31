const {
  Vegetable,
  Zone,
  User,
  Task,
  Family,
} = require("../models/index.model");

const { getUserIdFromToken } = require("./utils");

async function getAllTasks(req, res) {
  const userId = getUserIdFromToken(req.headers.authorization);
  console.log(userId);
  // récupérer toutes les tâches "à faire" d'un utilisateur

  try {
    const tasks = await Task.findAll({
      include: [
        {
          model: Vegetable,
          include: [
            {
              model: Family,
            },
            {
              model: Zone,
              include: [
                {
                  model: User,
                  //attributes: [], // Incluez ceci pour éviter de récupérer les attributs de User
                },
              ],
            },
          ],
        },
      ],
      where: {
        status_code: 1,
        "$Vegetable.Zone.User.id$": userId, // Filtrage basé sur l'ID de l'utilisateur
      },
    });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Erreur interne du serveur" });
    console.error(error);
  }
}

async function getOneTask(req, res) {
  const taskId = parseInt(req.params.taskId);
  try {
    const task = await Task.findByPk(taskId);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updateTask(req, res) {
  const taskId = parseInt(req.params.taskId);
  const { status_code, effective_date, comment } = req.body; //TODO : voir avec le front

  // 1 - Mettre à jour la tâche actuelle

  //Mettre le bon statut en fonction du status_code reçu
  let status = "";

  switch (status_code) {
    case 0:
      status = "En attente";
      break;
    case 1:
      status = "A faire";
      break;
    case 2:
      status = "Fait";
      break;
    default:
      console.log("Erreur");
  }

  // Chercher la task par son id
  try {
    const task = await Task.findByPk(taskId);

    // Mettre à jour la task
    await task.update({
      status_code: status_code,
      status: status,
      effective_date: effective_date,
      comment: comment,
    });

    res.status(200).json(task);

    // 2 - Trouver la tâche suivante et la mettre à jour

    // Fonction pour trouver la tâche suivante en fonction du type actuel
    const nextTasks = async (task) => {
      switch (task.type) {
        case "seeding":
          return await Task.findOne({
            where: {
              vegetable_id: task.vegetable_id,
              type: "planting",
            },
          });
        case "planting":
          return await Task.findOne({
            where: {
              vegetable_id: task.vegetable_id,
              type: "harvest",
            },
          });
        default:
          return null; // Si le type n'est ni "seeding" ni "planting"
      }
    };

    // Appel de nextTasks pour trouver la tâche suivante
    const nextTask = await nextTasks(task);

    if (!nextTask) {
      //return res.error(500).json({ message: "No next task" });
      return console.log("no next task");
    }

    // Mettez à jour la tâche suivante
    await nextTask.update({
      status_code: 1,
      status: "A faire",
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllTasks,
  getOneTask,
  updateTask,
};
