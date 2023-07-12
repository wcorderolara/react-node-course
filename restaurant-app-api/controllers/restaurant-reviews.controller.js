const RestaurantReview = require('../models')['RestaurantReview'];
const models = require('../models');
const {sendResponse} = require('../utils/response');
const { Op } = require('sequelize');

exports.createRestaurantReview = async (req, res) => {
    try{
        const review = await RestaurantReview.create({...req.body})

        if(!review) {
            return sendResponse(res, 500, {status: 500, message: 'Error al crear la Reseña del Restaurante'});
        }

        return sendResponse(res, 200, {status: 200, data: review});
    }catch(error){
        return sendResponse(res,500, {message: error.message});
    }
}

exports.getReviewsByRestaurant = async (req, res) => {
    try{
        const reviews = await RestaurantReview.findAll({
            where: {
                restaurant_id: req.params.restaurantId
            },
            include: [
                {
                    model: models.User,
                    attributes: ['id', 'username']
                }
            ]
        });

        if(reviews.length === 0) {
            return sendResponse(res, 202, {message: "No hay Reseñas para este Restaurante"});
        }

        return sendResponse(res, 200, {data: reviews});
    } catch(error) {
        return sendResponse(res, 500, {message: error.message});
    }
}

exports.putRestaruantReview = async (req, res) => {
    try{
        const review = await RestaurantReview.findOne({
            where: {
                id: req.params.reviewId
            }
        })

        if(!review) {
            return sendResponse(res, 404, {message: 'La reseña solicitada no existe'})
        }

        review.update({...req.body})
        review.save()

        return sendResponse(res, 200, {data: review});
        
    }catch(error) {
        return sendResponse(res, 500, {message: error.message})
    }
}

