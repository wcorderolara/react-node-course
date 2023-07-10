const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurants.controller');

router.get('/', restaurantController.getRestaurants);
router.get('/:restaurantId', restaurantController.getRestaurantById);
router.post('/', restaurantController.createRestaurant);
router.post('/bulk', restaurantController.bulkCreateRestaurants);
router.put('/:restaurantId', restaurantController.putRestaurant);

module.exports = router;
