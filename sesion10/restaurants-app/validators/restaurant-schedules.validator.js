const {body, param } = require('express-validator');

exports.createRestaurantScheduleValidator = () => {
    return [
        body('restaurant_id')
        .notEmpty()
        .withMessage('El Identificador del Restaurant es Obligatorio')
        .isInt()
        .withMessage('El Identificador del Restaurant tiene un formato Invalido'),
        body('days')
        .notEmpty()
        .escape()
        .withMessage('Los dias de la semana en el horario son obligatorios'),
        body('schedule')
        .notEmpty()
        .escape()
        .withMessage('El Horario de atencion es obligatorio')
    ]
}

exports.getRestaurantScheduleValidator = () => {
    return [
        param('restaurantId')
        .isInt()
        .escape()
        .withMessage('El Identificador del Restaurante tiene un formato invalido')
    ]
}


