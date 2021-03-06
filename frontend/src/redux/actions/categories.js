import axios from 'axios';
import { API_URL } from '../../api-config';
import store from '../store';
import { GET_ALL_CATEGORIES } from "../types";

export const getAllCategories = async() => {
    try {
        const res = await axios.get(API_URL + 'categories');
        store.dispatch({
            type: GET_ALL_CATEGORIES,
            payload: res.data
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

export const updateOne = async(_id, category) => {
    await axios.put(API_URL + 'categories/' + _id, category, {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    });
    return getAllCategories();
}

export const deleteOne = async(category_id) => {
    await axios.delete(API_URL + 'categories/' + category_id);
    return getAllCategories();
}