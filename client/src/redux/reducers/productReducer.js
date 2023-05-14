import * as actionTypes from '../constants/productConstant.js'


export const getProductReducer = (state = { products : [] }, action) => {
    //state has current values and action has updated values of state
    // through this "state" parameter reducer has access to redux store
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload };

        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload };

        default:return state;
    }
}

export const getProductDetailsReducer = (state = {product : {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading :false, product: action.payload };
        case actionTypes.GET_PRODUCTS_FAIL:
            return { loading: false, error: action.payload };
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return { product: {} };
        default: return state ;
    }
}