import axios from 'axios';
import { API_URL } from '../../api-config';
import store from '../store';

export const getAllCategories = async() => {
    try {
        const res = await axios.get(API_URL + 'categories');
        store.dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: res.data.categories
        })

        return res;
    } catch (error) {
        console.error(error)
    }
}
export const insert = async(category) => {
    await axios.post(API_URL + 'categories', category);
    return getAllCategories();
}