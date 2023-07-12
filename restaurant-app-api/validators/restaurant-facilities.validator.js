const {body, param} = require('express-validator');

exports.postRestaurantFacilityValidator = () => {
    return [
        body('restaurant_id')
        .notEmpty()
        .withMessage('El Codigo del Restaurante es Requerido')
        .isInt()
        .withMessage('El codigo del restaurante debe ser numérico'),
        body('description')
        .notEmpty()
        .withMessage('La Descripción de la Amenidad es requrida')
        .escape()
    ]
}

exports.getRestaurantFacilitiesValidator = () => {
    return [
        param('restaurantId')
        .notEmpty()
        .withMessage('El Codigo del restaurante es Requerido')
        .isInt()
        .withMessage('El Codigo del restaurante es inválido')
    ]
}

exports.putRestaurantFacilityValidator = () => {
    return [
        param('facilityId')
        .notEmpty()
        .withMessage('El Codigo de la Amenidad es Requerida')
        .isInt()
        .withMessage('El Codigo de la Amenidad es Invalido')
    ]
}
