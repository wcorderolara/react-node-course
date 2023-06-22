import React from 'react';

export default function ItemDetails({censoSelected}) {

    return(
        <>
            <div className="pb-2 border-bottom">
                <h2>Detalle Censo Departamento</h2>
            </div>
            <div className="row g-4 py-4">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Departameto: {censoSelected.ciudad}
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <b>No Departamento: </b>
                                    {censoSelected.id}
                                </li>
                                <li className="list-group-item">
                                    <b>Año Censo: </b>
                                    {censoSelected.fechaPrimerCenso}
                                </li>
                                <li className="list-group-item">
                                    <b>Poblaci&oacute;n: </b>
                                    {censoSelected.poblacionPrimerCenso.toLocaleString('es-GT')} habitantes

                                </li>
                                <li className="list-group-item">
                                    <b>Año Censo: </b>
                                    {censoSelected.fechaUltimoCenso}
                                </li>
                                <li className="list-group-item">
                                <b>Poblaci&oacute;n: </b>
                                    {censoSelected.poblacionUltimoCenso.toLocaleString('es-GT')} habitantes
                                </li>
                                <li className="list-group-item">
                                    <b>Incremento Poblaci&oacute;n (%): </b>
                                    {
                                        parseFloat(((censoSelected.poblacionUltimoCenso - censoSelected.poblacionPrimerCenso) / censoSelected.poblacionPrimerCenso) * 100).toFixed(2)
                                    }%

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="text-center">
                        <img src={censoSelected.srcImg} alt={censoSelected.ciudad} className="img-thumbnail" />
                    </div>
                </div>

            </div>
        </>
    )

}
