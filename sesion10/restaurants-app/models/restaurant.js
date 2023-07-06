'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Restaurant.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'restaurant_name'
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'restaurant_address'
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'restaurant_logo'
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Restaurant',
    tableName: 'restaurant',
    underscored: true
  });
  return Restaurant;
};