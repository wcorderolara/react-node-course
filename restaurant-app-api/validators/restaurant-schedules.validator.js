const {body, param} = require('express-validator');

exports.postRestaurantScheduleValidator = () => {
    return [
        body('restaurant_id')
        .notEmpty()
        .withMessage('El Codigo del Restaurante es Requerido')
        .isInt()
        .withMessage('El codigo del restaurante debe ser numérico'),
        body('days')
        .notEmpty()
        .withMessage('Los días son obligatorios en el horario del restaurante')
        .escape(),
        body('schedule')
        .notEmpty()
        .escape()
        .withMessage('El Horario para los días son obligatorios')
    ]
}

exports.getRestaurantSchedule = () => {
    return [
        param('restaurantId')
        .isInt()
        .withMessage('El Codigo del restaurante es inválido')
    ]
}
