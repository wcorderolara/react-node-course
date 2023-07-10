'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class RestaurantSchedule extends Model {
        static associate(models) {
            RestaurantSchedule.belongsTo(models.Restaurant, {foreignKey: {name: 'restaurant_id',allowNull: false}})
        }
    }
    RestaurantSchedule.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        days: {
            type: DataTypes.STRING,
            allowNull: false
        },
        schedule: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        holidaysOpen: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            field: 'holidays_open'
        }
    },{
        sequelize,
        modelName: 'RestaurantSchedule',
        tableName: 'restaurant_schedule',
        underscored: true
    });
    return RestaurantSchedule;
};
