import {createSlice} from "@reduxjs/toolkit";

export const getProductsStateRoot = state => state.products;

const productsReducer = createSlice({
    name: 'products',
    initialState: {
        list: {
            items: [],
            loading: false
        },
    },
    reducers: {
        setProducts(state, {payload}) {
            state.list.items = payload;
        },
        setListLoading(state, {payload}) {
            state.list.loading = payload;
        },
    }
});


export const {setProducts, setListLoading} = productsReducer.actions;
export default productsReducer.reducer;
