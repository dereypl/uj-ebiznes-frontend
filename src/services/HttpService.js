import axios from 'axios';

export const getAPIAddress = () => `http://uj-ebiznes-backend.azurewebsites.net:80`;

export const fetchItems = ({path, ...params}) => axios
    .get(`${getAPIAddress()}/${path}`, {
        params: params,
    })

export const fetchItem = ({path, id, ...params}) => axios
    .get(`${getAPIAddress()}/${path}/${id}`, {
        params: params,
    })

export const updateItem = ({path, id, data, ...params}) => axios
    .patch(`${getAPIAddress()}/${path}/${id}`, {
        ...data
    }, {
        params: params,
    })

export const createItem = ({path, data, ...params}) => axios
    .post(`${getAPIAddress()}/${path}`, {
        ...data
    }, {
        params: params,
    })

export default {
    fetchItems,
    fetchItem,
    updateItem,
    createItem,
}