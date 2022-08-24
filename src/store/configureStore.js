import {combineReducers, configureStore} from '@reduxjs/toolkit'
import categoriesReducer from "./reducers/categories";

const reducer = combineReducers({
    categories: categoriesReducer,
})

export const store = configureStore({
    reducer,
})

