import React from 'react';

export default function ImageList({imagenes}) {
    return(
        <>
            {imagenes.length > 0 && <h1>Resultados de la Búsqueda</h1>}
            <div className="container">
                <div className="row">
                    {imagenes.map( (imagen, index) => {
                        return(
                            <div className="col-4" key={index}>
                                <img 
                                src={imagen.urls.regular} 
                                alt={imagen.alt_description} className="img-thumbnail" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
