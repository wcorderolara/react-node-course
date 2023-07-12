import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRestaurants } from '../features/restaurants/api/restaurants.controller';

const initialState = {
    restaurants: [],
    restaurantSelected: {}
}

export const getRestaurantsAsync = createAsyncThunk(
    'restaurants/getRestaurants',
    async () => {
        const response = await getRestaurants();
        return response.data.results;
    }
)

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder
            .addCase(getRestaurantsAsync.fulfilled, (state, action) => {
                state.restaurants = action.payload
            })
    }
})

export const selectRestaurants = (state) => state.restaurants.restaurants;
export default restaurantsSlice.reducer;
