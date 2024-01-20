const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize-client');

class Family extends Model {}

Family.init({

  name : {
    type: DataTypes.TEXT,
    allowNull: false
  },
  soil_type : {
    type: DataTypes.TEXT,
    allowNull: false
  },
  vegetable_type : {
    type: DataTypes.TEXT,
    allowNull: false
  },
  watering : {
    type: DataTypes.TEXT,
    allowNull: false
  },
  weeding : {
    type: DataTypes.TEXT,
    allowNull: false
  },
  emergence : {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  growth_time : {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  depth : {
    type: DataTypes.TEXT,
    allowNull: true
  },
  spacing : {
    type: DataTypes.TEXT,
    allowNull: true
  },
  row_spacing : {
    type: DataTypes.TEXT,
    allowNull: true
  },
  exposure : {
    type: DataTypes.TEXT,
    allowNull: true
  },
  start_date_seeding : {
    type: DataTypes.TEXT,
    allowNull: true
  },
  end_date_seeding : {
    type: DataTypes.TEXT,
    allowNull: true
  },
  start_date_planting : {
    type: DataTypes.TEXT,
    allowNull: false
  },
  end_date_planting : {
    type: DataTypes.TEXT,
    allowNull: false
  },
  start_date_harvest : {
    type: DataTypes.TEXT,
    allowNull: false
  },
  end_date_harvest : {
    type: DataTypes.TEXT,
    allowNull: false
  },

} , {
  sequelize,
  tableName: 'family'
});


module.exports = Family;
