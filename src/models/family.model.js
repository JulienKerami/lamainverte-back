const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize-client');

class Family extends Model {}

Family.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  depth: {
    type: DataTypes.TEXT,
  },
  start_date_day_seeding: {
    type: DataTypes.INTEGER,
  },
  start_date_month_seeding: {
    type: DataTypes.INTEGER,
  },
  end_date_day_seeding: {
    type: DataTypes.INTEGER,
  },
  end_date_month_seeding: {
    type: DataTypes.INTEGER,
  },
  start_date_day_planting: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  start_date_month_planting: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  end_date_day_planting: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  end_date_month_planting: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  start_date_day_harvest: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  start_date_month_harvest: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  end_date_day_harvest: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  end_date_month_harvest: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
}, {
  sequelize,
  tableName: 'family'
});

module.exports = Family;