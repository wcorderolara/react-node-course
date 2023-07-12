const express = require('express');
const router = express.Router();
const RestaurantSchedulesController = require('../controllers/restaurant-schedules.controller');
const {createRestaurantScheduleValidator,getRestaurantScheduleValidator } = require('../validators/restaurant-schedules.validator')
const { handleValidationError } = require('../validators/middleware.validator');

router.get(
    '/:restaurantId',
    getRestaurantScheduleValidator(),
    handleValidationError,
    RestaurantSchedulesController.getRestaurantSchedule
);

router.post(
    '/',
    createRestaurantScheduleValidator(),
    handleValidationError,
    RestaurantSchedulesController.createRestaurantSchedule
);

router.post('/bulk', RestaurantSchedulesController.bulkRestaurantSchedule);

module.exports = router;
