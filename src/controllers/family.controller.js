const { Family } = require("../models/index.model");

async function getAllFamilies(req, res) {
  try {
    const families = await Family.findAll();
    res.status(200).json(families);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
}
module.exports = { getAllFamilies };
