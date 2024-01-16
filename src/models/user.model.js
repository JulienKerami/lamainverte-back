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

  first_name: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  last_name: {
    type: DataTypes.TEXT,
    allowNull: true
  },

}, {
  sequelize,
  tableName: 'user'
});

module.exports = User;