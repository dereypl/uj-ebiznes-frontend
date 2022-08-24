import {fetchItems} from "./HttpService";

const getParams = (params) => ({path: 'products', ...params})

const fetchAll = async (params = {}) => {
    try {
        const {data} = await fetchItems((getParams(params)));
        return data
    } catch (err) {
        console.error('Error while fetching products!')
    }
};

export default {
    fetchAll,
}