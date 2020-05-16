import axios from 'axios';
import { API_URL } from '../../api-config';
import store from '../store';

export const getAllSort = async() => {
    try {
        const res = await axios.get(API_URL + 'categoriessort');
        store.dispatch({
            type: 'GET_ALL_CATEGORIES_SORT',
            payload: res.data
        })
        return res;
    } catch (error) {
        console.error(error)
    }
}
// export const insert = async(categorySort) => {
//     await axios.post(API_URL + 'categoriessort', categorySort);
//     return getAllCategoriesSort();
// }
export const update = async(categorySort_id, categorySort) => {
    await axios.put(API_URL + 'categoriessort/' + categorySort_id, categorySort);
    return getAllSort();
}
// export const deleteOne = async(categorySort_id) => {
//     await axios.delete(API_URL + 'categoriessort/' + categorySort_id);
//     return getAllCategoriesSort();
// }