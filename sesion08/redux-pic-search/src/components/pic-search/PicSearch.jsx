import React from 'react';
import SearchBar from '../search-bar/SearchBar';
import ImageList from '../image-list/ImageList';
// importar los elementos de Redux
import { useSelector, useDispatch} from 'react-redux';
import { fetchImagenesAsync, selectImagenes } from '../../reducers/pictures/picturesReducer';


const PicSearch = (props) => {
    const imagenes = useSelector(selectImagenes);
    const dispatch = useDispatch();
    
    const onSearchBarSubmit = (terminoBusqueda) => {
        dispatch(fetchImagenesAsync(terminoBusqueda));
    }

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
