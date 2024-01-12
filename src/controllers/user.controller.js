const { User } = require('../models/index.model');

const userController = {

  loginPage(_, res) {

    res.send("Login page");
  },

  registerPage(_, res) {

    res.send("Register page");
  }


};

module.exports = userController;