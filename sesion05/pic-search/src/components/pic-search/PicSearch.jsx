import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchBar from '../search-bar/SearchBar';

const PicSearch = (props) => {
    let [terminoBusqueda, setTerminoBusqueda] = useState('');
    
    const onSearchBarSubmit = (terminoBusqueda) => {
        setTerminoBusqueda(terminoBusqueda);
    }

    useEffect( () => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: terminoBusqueda},
            headers: {
                'Authorization': 'Client-ID NNCD4MPPD7QdGeDjI_PxTHT4TYhWcz6X2KkTOUV2xCs'
            }
        }).then( response =>{
            console.log(response);
        }) 
    }, [terminoBusqueda] )

    return <SearchBar onSearchBarSubmit={onSearchBarSubmit} />
}

export default PicSearch;
