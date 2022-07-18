import {createSlice} from "@reduxjs/toolkit";

export const getCategoriesStateRoot = state => state.categories;

const defaultCategory = {
    _id: 0,
    name: 'Wszystkie'
}

const productsReducer = createSlice({
    name: 'categories',
    initialState: {
        list: {
            items: [],
            loading: false
        },
        activeId: 0,
    },
    reducers: {
        setCategories(state, {payload}) {
            state.list.items = [defaultCategory, ...payload];
        },
        setListLoading(state, {payload}) {
            state.list.loading = payload;
        },
        setActiveCategory(state, {payload}) {
            state.activeId = payload;
        },
    }
});


export const {setCategories, setListLoading, setActiveCategory} = productsReducer.actions;
export default productsReducer.reducer;
