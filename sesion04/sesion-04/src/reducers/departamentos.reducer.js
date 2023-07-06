import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getDepartamentos } from '../api/controllers/departamentos.controller';

const initialState = {
    departamentos: [],
    departamentoSelected: {},
}

export const fetchDepartamentos = createAsyncThunk(
    'departamentos/fetchDepartamentos',
    async() => {
        const response = await getDepartamentos()
        return response.data;
    }
)

export const departamentosSlice = createSlice({
    name: 'departamentos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDepartamentos.fulfilled, (state, action) => {
                state.departamentos = action.payload
            })
    }
})

export const selectDepartamentos = (state) => state.departamentos.departamentos;
export default departamentosSlice.reducer;

