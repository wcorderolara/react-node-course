import React from 'react';
import Foto from '../Foto/Foto';

let imagenes = [
    {
        nombre: 'Katherine Johnson',
        url: 'https://i.imgur.com/MK3eW3As.jpg'
    },
    {
        nombre: 'Katherine Johnson',
        url: 'https://i.imgur.com/MK3eW3As.jpg'
    },
    {
        nombre: 'Katherine Johnson',
        url: 'https://i.imgur.com/MK3eW3As.jpg'
    }
];

class Galeria extends React.Component {   
    render() {
        return (
            <>
                {imagenes.map( (imagen,index) => (
                    <Foto nombre={imagen.nombre} url={imagen.url}/>
                ))
                }
                <Foto/>
            </>
        );
    }

}

export default Galeria;
