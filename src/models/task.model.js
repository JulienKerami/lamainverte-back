const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize-client');

class Task extends Model {}

Task.init({ 
    type : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    start_date_period : {
        type: DataTypes.DATE,
        allowNull: true
    },
    end_date_period : {
        type: DataTypes.DATE,
        allowNull: true
    },
    effective_date : {
        type: DataTypes.DATE,
        allowNull: true
    },
    comment : {
        type: DataTypes.TEXT,
        allowNull: true
    },

    vegetable_id : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
        sequelize,
        tableName: 'task'
});


module.exports = Task;