const {body, param} = require('express-validator');

exports.createRestaurantReviewValidator = () => {
    return [
        body('restaurant_id')
        .notEmpty()
        .withMessage('El Restaurante debe ser requerido')
        .isInt()
        .withMessage('El Identificador del Restaurant es Invalido'),
        body('user_id')
        .notEmpty()
        .withMessage('El Autor de la reseña es obligatorio')
        .isInt()
        .withMessage('El Identificador del Autor es invalido'),
        body('reviewText')
        .notEmpty()
        .escape()
        .withMessage('El Texto de la Reseña es obligatoria')
        .isLength({min: 4, max: 500})
        .withMessage('La reseña debe tener un minimo de 4 y un maximo de 500 carcteres')
    ]
}

exports.getReviewsByRestaurantValidator = () => {
    return [
        param('restaurantId')
        .isInt()
        .withMessage('El Codigo del restaurante es inválido')
    ]
}

exports.putRestaruantReviewValidator = () => {
    return [
        param('reviewId')
        .isInt()
        .withMessage('El Codigo del restaurante es inválido')
    ]
}

