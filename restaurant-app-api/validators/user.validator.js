const {body, param} = require('express-validator');

exports.createUserValidator = () => {
    return [
        body('username')
        .notEmpty()
        .withMessage('El Nombre del usuario es requerido')
        .escape(),
        body('email')
        .notEmpty()
        .escape()
        .withMessage('El correo electronico es requerido')
        .isEmail()
        .withMessage('El correo electronico proporcionado no es valido')
    ]
}

exports.getUserReviewsValidator = () => {
    return [
        param('userId')
        .isInt()
        .withMessage('El Codigo del restaurante es inválido')
    ]
}

exports.updateUserValidator = () => {
    return [
        param('userId')
        .notEmpty()
        .withMessage('El codigo de usuario es requerido')
        .isInt()
        .withMessage('El Codigo del restaurante es inválido')
    ]
}
