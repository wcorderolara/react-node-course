import React, {Component} from 'react';
import Foto from '../foto/Foto';

let imagenes = [
    { nombre: 'Katherine Johnson', url: 'https://i.imgur.com/MK3eW3As.jpg' },
    { nombre: 'Katherine Johnson', url: 'https://i.imgur.com/MK3eW3As.jpg' },
    { nombre: 'Katherine Johnson', url: 'https://i.imgur.com/MK3eW3As.jpg' }
];
class Galeria extends Component {
    render() {
        return (
            <>
                {this.props.children}
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
