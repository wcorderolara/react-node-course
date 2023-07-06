module.exports.validateDeptoId = (req, res, next) => {
    if(isNaN(parseInt(req.params.deptoId, 10))){
        res.status(400).json({
            status: 400,
            message: "El Id del Departamento debe ser un numero entero"
        })
    }else {
        next();
    }
}
