const { Task } = require('../models/index.model');

async function getAllTasks(req, res) { 
  
  try {
    const tasks = await Task.findAll();
    
    res.status(200).json(tasks);
  
  } catch (error) {
    res.status(500).json(error);
  }
}


module.exports = {
  getAllTasks
};