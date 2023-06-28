import {configureStore} from '@reduxjs/toolkit';
import picturesReducer from '../reducers/pictures/picturesReducer';

export const store = configureStore({
    reducer: {
        pictures: picturesReducer,
    }
})

