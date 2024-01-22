const { Vegetable, Zone, User, Task } = require("../models/index.model");

const { getUserIdFromToken } = require("./utils");

async function getAllTasks(req, res) {
  const userId = getUserIdFromToken(req.headers.authorization);

  // récupérer toutes les tâches "à faire" d'un utilisateur

  try {
    const tasks = await Task.findAll({
      include: [
        {
          model: Vegetable,
          include: [
            {
              model: Zone,
              include: [
                {
                  model: User,
                  where: { id: userId },
                },
              ],
            },
          ],
        },
      ],
      where: {
        status_code: 1,
      },
    });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
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

// Update task

// Quand on click sur un tache et que l'utilisateur coche "fait"
// -> Mettre la date effective
// -> Mettre le statut : "fait"
// -> Mettre le statut code correspondant,
// -> Mettre un commentaire facultatif
// -> Si le type est seeding, recherche la tache planting ayant le même vegetable id et on lui change son statut en "à faire" (+ statut code correspondant)
// -> Si le type est planting, recherche la tache harvesting ayant le même vegetable id et on lui change son statut en "à faire" (+ statut code correspondant)
// -> Si le type est harvesting, toutes les tâches sont ok

module.exports = {
  getAllTasks,
  getOneTask,
};
