import {combineReducers, configureStore} from '@reduxjs/toolkit'
import productsReducer from "./reducers/products";
import basketReducer from "./reducers/basket";
import categoriesReducer from "./reducers/categories";

const reducer = combineReducers({
    products: productsReducer,
    basket: basketReducer,
    categories: categoriesReducer,
})

export const store = configureStore({
    reducer,
})

