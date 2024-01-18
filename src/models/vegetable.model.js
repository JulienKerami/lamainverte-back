const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize-client');

class Vegetable extends Model {}


Vegetable.init({
  growth_time : {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  variety : {
    type: DataTypes.TEXT,
    allowNull: true
  },
  comment : {
    type: DataTypes.TEXT,
    allowNull: true
  },
  zone_id : {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
  family_id : {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'vegetable'
});


module.exports = Vegetable;