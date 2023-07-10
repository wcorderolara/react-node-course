const Restaurant = require('../models')['Restaurant']
const models = require('../models');
const { Op } = require('sequelize');

exports.getRestaurants = async(req, res) => {
    try{
        const restaurants = await Restaurant.findAll({
            where: {
                status: 1
            },
            attributes: ['id', 'name', 'address']
        });

        if(restaurants.length == 0) {
            res.status(204).json({status: 204, message:"No hay informacion para estas solicitud"})
        }

        res.status(200).json({status: 200, data: restaurants});

    } catch(error) {
        res.status(500).json({status: 500, message: error});
    }
}

exports.getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findOne({
            where: {
                [Op.and]: [
                    {id: req.params.restaurantId},
                    {status: 1}
                ]
            },
            include: [
                {
                    model: models.RestaurantSchedule
                }
            ]
        })

        if(!restaurant) {
            return res.status(404).json({status: 404, message: 'El Restaurante solicitado no existe'});
        }

        return res.status(200).json({status: 200, data: restaurant})

    } catch(error) {
        res.status(500).json({status: 500, message: error});
    }
}

exports.createRestaurant = async (req, res) => {
    try{
        const restaurant = await Restaurant.create({
            name: req.body.name,
            address: req.body.address
        })
        if(!restaurant) {
            res.status(500).json({status: 500, message: 'Error al crear el Restaurante'});
        }

        res.status(201).json({status: 200, data: restaurant});

    } catch(error) {
        res.status(500).json({status: 500, message: error});
    }
}

exports.bulkCreateRestaurants = async(req, res) => {
    try{
        const restaurants = await Restaurant.bulkCreate(req.body.restaurants);

        if(restaurants.length === 0) {
            res.status(500).json({status: 500, message:"Error al crear los restaurantes"})
        }

        res.status(201).json({status: 201, data: restaurants});

    }catch(error) {
        res.status(500).json({status: 500, message: error});
    }
}

exports.putRestaurant = async(req, res) => {
    try{
        const restaurant = await Restaurant.findOne({
            where: {
                id: req.params.restaurantId
            }
        });

        if(!restaurant) {
            return res.status(404).json({status: 404, message: 'El Restaurante solicitado no existe'});
        }

        restaurant.update({...req.body})
        restaurant.save();

        res.status(200).json({status: 200, data: restaurant});

    }catch(error) {
        res.status(500).json({status: 500, message: error});
    }
}
