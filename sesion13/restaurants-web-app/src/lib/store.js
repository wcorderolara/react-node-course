import { configureStore } from "@reduxjs/toolkit"
import restaurantsReducer from '../stores/restaurants.reducer';

export const store = configureStore ({
    reducers: {
        restaurants: restaurantsReducer
    }
});
