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
    start_date_day_seeding : {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    start_date_month_seeding : {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    end_date_day_seeding : {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    end_date_month_seeding : {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    start_date_day_planting : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start_date_month_planting : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    end_date_day_planting : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    end_date_month_planting : {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    start_date_day_harvest : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start_date_month_harvest : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    end_date_day_harvest : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    end_date_month_harvest : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
} , {
    sequelize,
    tableName: 'family'
});


module.exports = Task;