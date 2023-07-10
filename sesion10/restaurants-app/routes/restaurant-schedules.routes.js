const express = require('express');
const router = express.Router();
const RestaurantSchedulesController = require('../controllers/restaurant-schedules.controller');

router.get('/:restaurantId',RestaurantScheduleController.getRestaurantSchedule);
router.post('/', RestaurantSchedulesController.createRestaurantSchedule);
router.post('/bulk', RestaurantSchedulesController.bulkRestaurantSchedule);

module.exports = router;
