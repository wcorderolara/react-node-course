const { data } = require('../db/data');

exports.getAllDepartamentos = (req, res) =>{
    res.send(data);
}

exports.getDepartamentoById = (req, res) => {
    const depto = data.findIndex( deptartamento => deptartamento.id == req.params.deptoId);
    if(depto != -1) {
        res.status(200).json({
            status: res.statusCode,
            data: data[depto],
        })
    }else {
        res.status(404).json({
            status: 404,
            message: 'Departamento no encontrado',
        })
    }
}

exports.addDepartamento = (req, res) => {
    const deptoRequest = req.body;
    const deptoIdx = data.findIndex( depto => depto.ciudad == deptoRequest.ciudad);

    if(deptoIdx === -1) {
        departamentos = [...data, deptoRequest];
        res.status(201).json({
            status: 201,
            data: departamentos
        })
    }else {
        res.status(409).json({
            status: 409,
            message: `El departamento ${deptoRequest.ciudad} ya existe`,
        })
    }
}

