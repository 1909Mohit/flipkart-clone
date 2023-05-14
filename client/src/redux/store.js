import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductDetailsReducer, getProductReducer } from "./reducers/productReducer";
import { cartReducer } from './reducers/cartReducer.js';

const reducer = combineReducers({
    // this getProducts is different from api function. it is an object in redux store
    getProductsState: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;