import {createItem, fetchItems} from "./HttpService";

export const getParams = (params) => ({path: 'orders', ...params})

const fetchAll = async (params = {}) => {
    try {
        const {data} = await fetchItems((getParams(params)));
        return data
    } catch (err) {
        console.error('Error while fetching orders!')
    }
};

const createOrder = async (order = {}) => {
    try {
        const {data} = await createItem({data: order, ...getParams({})});
        return data
    } catch (err) {
        console.error('Error while creating order!')
    }
};

export default {
    fetchAll,
}