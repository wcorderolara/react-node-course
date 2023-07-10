const express = require('express');
const router = express.Router();
const restaurantsRoutes = require('./restaurants.routes');
const restaurantSchedulesRoutes = require('./restaurant-schedules.routes');

router.use('/restaurants', restaurantsRoutes);
router.use('/schedules', restaurantSchedulesRoutes);

module.exports = router;
