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



module.exports =  {getAllVegetables};