import {combineReducers, configureStore} from '@reduxjs/toolkit'
import categoriesReducer from "./reducers/categories";
import authReducer from "./reducers/auth";

const reducer = combineReducers({
    categories: categoriesReducer,
    auth: authReducer,
})

export const store = configureStore({
    reducer,
})

