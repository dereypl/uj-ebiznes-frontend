import axios from "axios";

export const getUserBasket = () => {
    // return axios.get('').then(response => response.json())
    //fixme: remove mock product
    return Promise.resolve([{id: 1, name: 'Testowy produkt', price: 1.57}])
}