const RestaurantSchedule = require('../models')['RestaurantSchedule']
const {sendResponse} = require('../utils/response');

exports.createRestaurantSchedule = async (req, res) => {
    try{
        const schedule = await RestaurantSchedule.create({
            ...req.body
        })

        if(!schedule) {
            return sendResponse(res, 500, {status: 500, message: `Error al crear el Horario`});
        }

        return sendResponse(res, 201, {status:200, data: schedule});
    }catch(error) {
        return sendResponse(res, 500, {message: error.message});
    }
}

exports.bulkRestaurantSchedule = async (req, res) => {
    try{
        const schedules = await RestaurantSchedule.bulkCreate(req.body.schedules);

        if(schedules.length === 0 ) {
            return sendResponse(res,500, {message: "Error al crear los horiarios del restaurante"});
        }

        return sendResponse(res, 201, {data: schedules});
    }catch(error) {
        return sendResponse(res, 500, {message: error.message});
    }
}

exports.getRestaurantSchedule = async (req, res) => {
    try{
        const schedules = await RestaurantSchedule.findAll({
            where: {
                restaurant_id: req.params.restaurantId
            }
        })

        if(schedules.length === 0 ) {
            sendResponse(res,202, {message: "No Hay Horarios para este Restaurante"});
            return;
        }

        return sendResponse(res, 200, {data: schedules});
    }catch(error) {
        return sendResponse(res, 500, {message: error.erros});
    }
}

