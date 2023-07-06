const Restaurant = require('../models')['Restaurant']

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

