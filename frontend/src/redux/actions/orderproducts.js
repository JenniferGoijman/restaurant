import store from '../store';
import axios from 'axios';
import { API_URL } from '../../api-config';

export const getAllOrderProducts = async() => {
    try {
        const res = await axios.get(API_URL + 'orderproducts');
        store.dispatch({
            type: 'GET_ALL_ORDERS_PRODUCTS',
            payload: res.data
        })
        return res;
    } catch (error) {
        console.error(error)
    }
}

export const insert = async(orderproduct) => {
    await axios.post(API_URL + 'orderproducts', orderproduct);
    return getAllOrderProducts();
}