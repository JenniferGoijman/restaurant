import axios from 'axios';
import { API_URL } from '../../api-config';
import store from '../store';
import { GET_ALL_PRODUCTS, ADD_CART, REMOVE_CART, ADD_CART_UNITS, RESET_CART, SUBSTRACT_CART } from '../types';

export const getAllProducts = async() => {
    try {
        const res = await axios.get(API_URL + 'products');
        store.dispatch({
            type: GET_ALL_PRODUCTS,
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
export const update = async(product_id, product) => {
    await axios.put(API_URL + 'products/' + product_id, product);
    return getAllProducts();
}
export const deleteOne = async(product_id) => {
    await axios.delete(API_URL + 'products/' + product_id);
    return getAllProducts();
}
export const addCart = (newProduct) => {
    const { product } = store.getState();
    if (!product.cart?.includes(newProduct)) {
        newProduct.units=1;
        store.dispatch({
            type: ADD_CART,
            payload: newProduct
        })
    } else {
        newProduct.units++
        store.dispatch({
            type: ADD_CART_UNITS,
            payload: newProduct
        })
    }
}
export const removeCart = (removeProductId) => {
    const { product } = store.getState();
    const removeProduct = product.cart.filter(p => p._id === removeProductId)[0];
    removeProduct.units--;
    if (removeProduct.units===0) {
        store.dispatch({
        type: REMOVE_CART,
        payload: removeProductId
        })
    } else {
        store.dispatch({
            type: SUBSTRACT_CART,
            payload: removeProductId
        })
    }
}
export const resetCart = () => {
    store.dispatch({
        type: RESET_CART
    })
}
