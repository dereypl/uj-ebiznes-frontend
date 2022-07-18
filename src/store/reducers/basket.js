import {createSlice} from "@reduxjs/toolkit";

export const getBasketStateRoot = state => state.basket;

const basketReducer = createSlice({
    name: 'basket',
    initialState: {
        items: [],
    },
    reducers: {
        addProduct(state, {payload}) {
            const foundIndex = state.items.findIndex(product => product._id === payload._id);

            if (foundIndex !== -1) state.items[foundIndex].count++;
            else state.items.push({...payload, count: 1});
        },
        removeProduct(state, {payload}) {
            state.items = state.items.filter(product => product._id !== payload);
        },
        clearBasket(state) {
            state.items = [];
        },
    }
});


export const {addProduct, removeProduct, clearBasket} = basketReducer.actions;
export default basketReducer.reducer;
