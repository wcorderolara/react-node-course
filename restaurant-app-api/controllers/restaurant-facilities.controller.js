const RestaurantFacility = require('../models')['RestaurantFacility'];
const { sendResponse } = require('../utils/response');
const { Op } = require('sequelize');

exports.getFacilities = async (req, res) => {
    try{
        const facilities = await RestaurantFacility.findAll({
            where: {
                [Op.and]: [
                    {restaurant_id: req.params.restaurantId},
                    {status: 1}
                ]
            }
        })

        if(facilities.length === 0) {
            return sendResponse(res, 202, {status: 202, message: `No hay Amenidades para este Restaurante`});
        }

        return sendResponse(res, 201, {status:200, data: facilities});

    }catch(error){
        return sendResponse(res, 500, {message: error.message});
    }
}

exports.createFacility = async (req, res) => {
    try{
        const facilities = await RestaurantFacility.bulkCreate(req.body.facilities);

        if(facilities.length === 0) {
            return sendResponse(res, 500, {status: 500, message: `Error al crear las Facilidades`});
        }

        return sendResponse(res, 201, {status:200, data: facilities});

    }catch(error){
        return sendResponse(res, 500, {message: error.message});
    }
}

exports.updateFacility = async (req, res) => {
    try{
        const facility = await RestaurantFacility.findOne({
            where: {
                id: req.params.facilityId
            }
        });

        if(!facility) {
            return sendResponse(res, 404, {message: "Esta Amenidad no existe"});        
        }

        facility.update({...req.body});
        facility.save();
        return sendResponse(res, 201, {status:200, data: facility});

    }catch(error) {
        return sendResponse(res, 500, {message: error.message});        
    }
}

