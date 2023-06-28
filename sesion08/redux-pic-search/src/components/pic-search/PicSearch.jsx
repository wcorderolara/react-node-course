import React, {useState, useEffect} from 'react';
import SearchBar from '../search-bar/SearchBar';
import ImageList from '../image-list/ImageList';
import unsplash from '../../apis/unsplash';

const PicSearch = (props) => {
    let [terminoBusqueda, setTerminoBusqueda] = useState('');
    let [imagenes, setImagenes] = useState([]);
    
    const onSearchBarSubmit = (terminoBusqueda) => {
        setTerminoBusqueda(terminoBusqueda);
    }

    useEffect( () => {
        unsplash.get('/search/photos', {
            params: { query: terminoBusqueda, per_page: 25},            
        }).then( response =>{
            setImagenes(response.data.results);
        }) 
    }, [terminoBusqueda] )

    return (
        <>
            <SearchBar onSearchBarSubmit={onSearchBarSubmit} />
            <div className="py-4">
                <ImageList imagenes={imagenes} />
            </div>
        </>
    )
}

export default PicSearch;
