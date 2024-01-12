const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize-client');

class Zone extends Model {}

Zone.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

}, {
  sequelize,
  tableName: 'zone'
});

module.exports = Zone;