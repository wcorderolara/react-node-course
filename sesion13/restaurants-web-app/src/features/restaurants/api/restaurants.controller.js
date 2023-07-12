import { api } from '../../../lib/axios';

export const getRestaurants = async () => {
    const response = await api.get('/restaurants');

    return response;
}
