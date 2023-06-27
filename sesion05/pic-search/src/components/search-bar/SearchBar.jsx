import React, {useState} from 'react';

export default function SearchBar({onSearchBarSubmit}) {
    let [termino, setTermino] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        onSearchBarSubmit(termino);
    }

    return(
        <>
            <div className="row">
                <form onSubmit={onFormSubmit}>
                    <label htmlFor="" className="form-label">Buscador de Im&aacute;genes</label>
                    <input type="text" className="form-control" 
                        onChange={ (e) => setTermino(e.target.value)}
                    />
                </form>
            </div>
        </>
    )
}
