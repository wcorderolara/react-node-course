const {validationResult} = require('express-validator');
const {sendResponse} = require('../utils/response')

exports.handleValidationError = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return sendResponse(res, 400, errors.array())
    }
    next();
}
