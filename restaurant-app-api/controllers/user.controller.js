const User = require('../models')['User'];
const models = require('../models');
const { sendResponse } = require('../utils/response');
const { Op } = require('sequelize');

exports.createUser = async (req, res) => {
    try{
        const user = await User.create({...req.body})

        if(!user) {
            return sendResponse(res, 500, {status: 500, message: `Error al crear el Horario`});
        }

        return sendResponse(res, 201, {status:200, data: user});
    }catch(error) {
        return sendResponse(res, 500, {message: error.errors[0]});
    }
}

exports.getUserReviews = async (req, res) => {
    try{
        const user = await User.findOne({
            where: {
                id: req.params.userId
            }
        })

        if(!user) {
            return sendResponse(res, 404, {message: 'El Usuario no Existe'});
        }

        const userReviews = await user.getRestaurantReviews({
            include: [
                {
                    model: models.Restaurant,
                    attributes: ['id', 'name']
                }
            ],
        })

        if(userReviews.length === 0) {
            return sendResponse(res, 202, {message: 'El Usuario no ha realizado ningun review'})
        }

        return sendResponse(res, 200, {reviews: userReviews, user: user});

    } catch(error) {
        return sendResponse(res, 500, {message: error.message});
    }
}

exports.getUsers = async (req, res) => {
    try{
        const users = await User.findAll({
            where: {
                status: 1
            }
        });

        if(users.length === 0) {
            return sendResponse(res, 202, {message: "No hay Usuarios registrados"})
        }

        return sendResponse(res, 200, {data: users});

    }catch(error) {
        return sendResponse(res, 500, {message: error.message});
    }
}

exports.updateUser = async (req, res) => {
    try{
        const user = await User.findOne({
            where: {
                id: req.params.userId
            }
        })

        if(!user) {
            return sendResponse(res, 404, {message: 'El Usuario no Existe'});
        }

        user.update({...req.body})
        user.save();

        return sendResponse(res, 200, {data: user});
    }catch(error) {
        return sendResponse(res, 500, {message: error.message});
    }
}

