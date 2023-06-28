import  {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getUnsplahsImagenes } from '../../apis/controllers/pictures.controller';

const initialState = {
    imagenes: [],
}

export const fetchImagenesAsync = createAsyncThunk(
    'imagenes/fetchImagenes',
    async(terminoBusqueda) => {
        const response = await getUnsplahsImagenes(terminoBusqueda)
        return response.data.results;
    }
)

export const picturesSlice = createSlice({
    name: 'pictures',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchImagenesAsync.fulfilled, (state, action) => {
                state.imagenes = action.payload
            })
    }
})

export const selectImagenes = (state) => state.pictures.imagenes;
export default picturesSlice.reducer;
