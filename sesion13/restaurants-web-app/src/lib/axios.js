import axios from 'axios';
import { API_URL } from '../config/index'

export const api = axios.create({
    baseURL: API_URL
});
