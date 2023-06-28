import unsplash from "../unsplash";

export const getUnsplahsImagenes = async (terminoBusqueda) => {
    const response = await unsplash.get('/search/photos', {
        params: { query: terminoBusqueda, per_page: 25},            
    })

    return response;
}
