const express = require('express');
const router = express.Router();
const restaurantsRoutes = require('./restaurants.routes');
const restaurantScheduleRoutes = require('./restaurant-schedules.routes');
const restaurantFacilitiesRoutes = require('./restaurant-facilities.routes')
const usersRoutes = require('./user.routes')
const restaurantReviewsRoutes = require('./restaurant-reviews.routes')

router.use('/restaurants', restaurantsRoutes);
router.use('/schedules', restaurantScheduleRoutes);
router.use('/facilities', restaurantFacilitiesRoutes);
router.use('/users', usersRoutes);
router.use('/reviews', restaurantReviewsRoutes);

module.exports = router;
