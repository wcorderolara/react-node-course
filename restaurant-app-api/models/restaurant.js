'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {

    static associate(models) {
      Restaurant.hasMany(models.RestaurantSchedule, {foreignKey: {name: 'restaurant_id', allowNull: false}});
      Restaurant.hasMany(models.RestaurantFacility, {foreignKey: {name: 'restaurant_id', allowNull: false}});
      Restaurant.hasMany(models.RestaurantReview, {foreignKey: {name: 'restaurant_id', allowNull: false}});
    }
  }
  Restaurant.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {
      type: DataTypes.STRING(75), 
      alloNull: false, 
      field: 'restaurant_name'
    },
    address: {type: DataTypes.STRING(120), allowNull: false, field: 'restaurant_address'},
    logo: {type: DataTypes.STRING(255), allowNull: true, field: 'restaurant_logo'},
    status: {type: DataTypes.BOOLEAN, defaultValue: true}
  }, {
    sequelize,
    modelName: 'Restaurant',
    freezeTableName: true,
    tableName: 'restaurant',
    underscored: true
  });
  return Restaurant;
};