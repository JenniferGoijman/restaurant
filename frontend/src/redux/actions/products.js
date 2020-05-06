import axios from 'axios';
import { API_URL } from '../../api-config';
import store from '../store';

export const getAllProducts = async() => {
    try {
        const res = await axios.get(API_URL + 'products');
        console.log(res.data);
        store.dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: res.data
        })

        return res;
    } catch (error) {
        console.error(error)
    }
}
export const insert = async(product) => {
    await axios.post(API_URL + 'products', product);
    return getAllProducts();
}
export const deleteOne = async(product_id) => {
    await axios.delete(API_URL + 'products/' + product_id);
    return getAllProducts();
}