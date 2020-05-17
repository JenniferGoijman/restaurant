import store from '../store';
import axios from 'axios';
import { API_URL } from '../../api-config';

export const getAllOrders = async() => {
    try {
        const res = await axios.get(API_URL + 'orders');
        store.dispatch({
            type: 'GET_ALL_ORDERS',
            payload: res.data
        })
        return res;
    } catch (error) {
        console.error(error)
    }
}
export const insert = async(order) => {
    await axios.post(API_URL + 'orders', order);
    return getAllOrders();
}
export const update = async(order_id, order) => {
    await axios.put(API_URL + 'orders/' + order_id, order);
    return getAllOrders();
}