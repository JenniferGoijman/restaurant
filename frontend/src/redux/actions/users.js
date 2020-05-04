import store from '../store';
import axios from 'axios';
import { API_URL } from '../../api-config';

export const register = async(user) => {
    return axios.post(API_URL + 'users/register', user)
}

export const login = async(user) => {
    const res = await axios.post(API_URL + 'users/login', user);
    store.dispatch({
        type: 'LOGIN',
        payload: res.data.user
    })
    localStorage.setItem('authToken', res.data.token);
    return res;
}

export const logout = async() => {
    const res = await axios.get(API_URL + 'users/logout', {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    })
    localStorage.removeItem('authToken');
    store.dispatch({
        type: 'LOGOUT'
    })
    return res;
}