import React from 'react';

class Foto extends React.Component {
    static defaultProps = {
        nombre: 'Lin Lanying',
        url: 'https://i.imgur.com/1bX5QH6.jpg'
    }

    render() {
        const {nombre, url} = this.props;

        return (
            <figure>
                <img 
                    src={url} 
                    alt={nombre}/>
            </figure>
        )
    }
}

export default Foto;


