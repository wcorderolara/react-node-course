import { configureStore } from "@reduxjs/toolkit"
import restaurantsReducer from '../stores/restaurants.reducer';

export const store = configureStore ({
    reducer: {
        restaurants: restaurantsReducer
    }
});
