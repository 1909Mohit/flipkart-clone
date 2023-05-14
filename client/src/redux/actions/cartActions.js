import * as actionTypes from '../constants/cartConstant.js';
import axios from 'axios';

const URL = '';

export const addToCart = (id, quantity) => {
  return async (dispatch) => { // thunk middleware. has two elements 'dispatch' and 'getState'
      // thunk is used to write asynchronous logic
      try {
        const { data } = await axios.get(`${URL}/product/${id}`);
      
        dispatch({ type: actionTypes.ADD_TO_CART, payload: {...data, quantity} });
      } catch (error) {
        dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
      }
  }
}

export const removeFromCart = (id) => {
  return (dispatch) => { // thunk middleware. has two elements 'dispatch' and 'getState'
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
  }
}