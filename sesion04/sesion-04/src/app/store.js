import {configureStore} from '@reduxjs/toolkit';
import departamentosReducer from '../reducers/departamentos.reducer.js';

export const store = configureStore({
    reducer: {
        departamentos: departamentosReducer
    }
})
