import store from './store';
import axios from 'axios';
import { API_URL } from '../api-config';

export const login = async(user) => {
    try {
        const res = await axios.post(API_URL + 'users/login', user);
        store.dispatch({
            type: 'LOGIN',
            payload: res.data.user
        })
        localStorage.setItem('authToken', res.data.token);
    } catch (error) {
        console.error(error)
    }
}