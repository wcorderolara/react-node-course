'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class RestaurantReview extends Model {
        static associate(models) {
            RestaurantReview.belongsTo(models.Restaurant, {foreignKey: {name: 'restaurant_id', allowNull: false}});
            RestaurantReview.belongsTo(models.User, {foreignKey: {name: 'user_id', allowNull: false}});
        }
    }
    RestaurantReview.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rating: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        reviewText: {
            type: DataTypes.STRING(500),
            allowNull: false,
            field: 'review_text'
        }
    }, {
        sequelize,
        modelName: 'RestaurantReview',
        tableName: 'restaurant_review',
        underscored: true
    });

    return RestaurantReview;
}
