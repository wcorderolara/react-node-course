'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class RestaurantFacility extends Model {
        static associate(models) {
            RestaurantFacility.belongsTo(models.Restaurant, {foreignKey: {name: 'restaurant_id', allowNull:false}});
        }
    }

    RestaurantFacility.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, autoIncrement: true
        },
        description: {
            type: DataTypes.STRING(30), 
            alloNull: false, 
            field: 'restaurant_name'
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        sequelize,
        modelName: 'RestaurantFacility',
        tableName: 'restaurant_facility',
        underscored: true
    })

    return RestaurantFacility;
}
