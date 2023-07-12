const restaurant = require('../models')['Restaurant']
const models = require('../models');
const {sendResponse} = require('../utils/response');

exports.getAllRestaurants = async (req, res) => {
    try{
        const restaurants = await restaurant.findAll()

        if(restaurants.length === 0) {
            return res.status(204).json({status: 204, message: 'No hay informacion para esta solicitud'})
        }

        return res.status(200).json({status: 201, data: restaurants});
    } catch( error) {
        return res.status(500).json({status: 500, error: error})
    }
}

exports.getRestaurantById = async (req, res) => {
    try{
        const restaurantItem = await restaurant.findOne({
            where: {
                id: req.params.restaurantId
            },
            include: [
                {
                    model: models.RestaurantSchedule,
                    attributes: ['days', 'schedule']
                },
                {
                    model: models.RestaurantReview,
                    attributes: ['id', 'rating', 'reviewText'],
                    include: [
                        {
                            model: models.User,
                            attributes: ['id', 'username']
                        }
                    ]
                }
            ]
        })

        if(!restaurantItem) {
            return res.status(404).json({status: 404, message: 'El Restaurante No Existe'})
        }

        return res.status(200).json({status: 201, data: restaurantItem});

    } catch(error) {
        return res.status(500).json({status: 500, error: error})
    }
}

exports.createRestaurant = async (req, res) => {
    try{
        const restaurantItem = await restaurant.create({
            name: req.body.name,
            address: req.body.address
        })

        if(!restaurantItem) {
            res.status(500).json({status: 500, message: 'Error al crear el restaurant'})
        }

        res.status(201).json({status: 201, data: restaurantItem});
    }catch(error) {
        return res.status(500).json({status: 500, error: error})
    }
}

exports.bulkRestaurants = async (req, res) => {
    try{
        const restaurants = await restaurant.bulkCreate(req.body.restaurants);
        
        if(restaurants.length === 0){
            res.status(500).json({status: 500, message: 'Error al crear el restaurant'})
        }
        
        res.status(201).json({status: 201, data: restaurants});
    }catch(error) {
        return res.status(500).json({status: 500, error: error})
    }
}

