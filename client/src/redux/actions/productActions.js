import * as actionTypes from '../constants/productConstant.js';
import axios from 'axios';

const URL = '';



// getProducts api to get products from backend
export const getProducts = () => {
    return async (dispatch) => { // thunk middleware. has two elements 'dispatch' and 'getState'
        // thunk is used to write asynchronous logic
        try {
            const { data } = await axios.get(`${URL}/products`);
            dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
        }
    }
}

export const getProductDetails = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST })
            const { data } = await axios.get(`${URL}/product/${id}`);
            dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message });
        }
    }
}