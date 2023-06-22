import React from 'react';

export default function TableData({data, onChangeDepartamento}) {

    function onSelectDepartamento(index) {
        onChangeDepartamento(index);
    }

    return(
        <>
            <div className="row g-4 py-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">A&ntilde;o Censo</th>
                            <th scope="col">Población 2002</th>
                            <th scope="col">Año Censo</th>
                            <th scope="col">Población 2018</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (depto, index) => (
                            <tr key={depto.id}>
                                <td>{depto.id}</td>
                                <td>{depto.ciudad}</td>
                                <td>{depto.fechaPrimerCenso}</td>
                                <td>{depto.poblacionPrimerCenso.toLocaleString('es-GT')}</td>
                                <td>{depto.fechaUltimoCenso}</td>
                                <td>{depto.poblacionUltimoCenso.toLocaleString('es-GT')}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm"
                                        onClick={() => onSelectDepartamento(index)}>
                                        Ver Detalle
                                    </button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}