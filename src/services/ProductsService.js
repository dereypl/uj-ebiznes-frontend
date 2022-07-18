import {batch} from "react-redux";
import {setListLoading, setProducts} from "../store/reducers/products";
import {fetchItem, fetchItems} from "./HttpService";
import {getParams as getCategoryParams} from './CategoryService'

const getParams = (params) => ({path: 'products', ...params})

const fetchAll = (params = {}) => async dispatch => {
    try {
        dispatch(setListLoading(true))
        const {data} = await fetchItems((getParams(params)));
        batch(() => {
            dispatch(setProducts(data || []))
            dispatch(setListLoading(false))
        })
    } catch (err) {
        console.error('Error while fetching products!')
    }
};


const fetchByCategoryId = (params = {}) => async dispatch => {
    try {
        dispatch(setListLoading(true))
        const {data} = await fetchItem((getCategoryParams(params)));
        batch(() => {
            dispatch(setProducts(data.products || []))
            dispatch(setListLoading(false))
        })
    } catch (err) {
        console.error('Error while fetching products by categoryId!')
    }
};

export default {
    fetchAll,
    fetchByCategoryId
}