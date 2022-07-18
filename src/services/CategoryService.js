import {batch} from "react-redux";
import {setCategories, setListLoading} from "../store/reducers/categories";
import {fetchItems} from "./HttpService";

export const getParams = (params) => ({path: 'categories', ...params})

const fetchAll = (params = {}) => async dispatch => {
    try {
        dispatch(setListLoading(true))
        const {data} = await fetchItems((getParams(params)));
        batch(() => {
            dispatch(setCategories(data || []))
            dispatch(setListLoading(false))
        })
    } catch (err) {
        console.error('Error while fetching categories!')
    }
};

export default {
    fetchAll,
}