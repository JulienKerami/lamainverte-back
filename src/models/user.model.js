const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize-client');

class User extends Model {}

User.init({
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },

  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  firstname: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  lastname: {
    type: DataTypes.TEXT,
    allowNull: false
  },

}, {
  sequelize,
  tableName: 'user'
});

module.exports = User;