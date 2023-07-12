const express = require('express');
const router = express.Router();
const RestaurantScheduleController = require('../controllers/restaurants-schedule.controller');
const {postRestaurantScheduleValidator, getRestaurantSchedule} = require('../validators/restaurant-schedules.validator');
const {handleValidationError} = require('../validators/middleware.validator');

/**
 * @swagger
 *  components:
 *      schemas:
 *          RestaurantSchedule:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: representa el ID del horario del Restaurant
 *                  restaurant_id:
 *                      type: number
 *                      description: Identificador del Restaurant Asociado
 *                  days:
 *                      type: string
 *                      description: dias en los que funciona el restaurant
 *                  schedule:
 *                      type: string
 *                      description: Horario de los dias proporcionados
 *                  status:
 *                      type: boolean
 *                      description: Describe el stado del Restaruant
 *              required:
 *                  - restaurant_id
 *                  - days
 *                  - schedule
*/


/**
 * @swagger
 * /schedules/{restaurantId}:
 *  get:
 *      summary: Obtiene los horarios de los Restaurants consultados
 *      tags: [RestaurantSchedule]
 *      parameters:
 *          -   name: restaurantId
 *              in: path
 *              schema:
 *                  type: integer
 *              required: true
 *      responses:
 *          '200':
 *              description: Listado de Horarios del Restaurant
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              records:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/RestaurantSchedule'                              
 */
router.get(
    '/:restaurantId',
    getRestaurantSchedule(),
    handleValidationError,
    RestaurantScheduleController.getRestaurantSchedule
);

/**
 * @swagger
 * /schedules:
 *  post:
 *      summary: Crea un nuevo Horario para el Restaurante
 *      tags: [RestaurantSchedule]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/RestaurantSchedule'
 *      responses:
 *          '201':
 *              description: Horrio para el Restaurante Creado
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/RestaurantSchedule'                
 */
router.post(
    '/', 
    postRestaurantScheduleValidator(),
    handleValidationError,
    RestaurantScheduleController.createRestaurantSchedule
);

router.post('/bulk', RestaurantScheduleController.bulkRestaurantSchedule);

module.exports = router;
 