import React, {useEffect, useState} from "react";
import {getUserBasket} from "../api/products";

const initialState = {products: []}

export const BasketContext = React.createContext(initialState);

export const BasketContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const addProductToBasket = (prod) => setProducts([...products, prod])
    const removeFromBaster = (id) => setProducts(products.filter(prod => prod.id !== id))
    // const itemsCount = items.reduce((prev, curr) => prev + curr.count, 0);
    // const totalPrice = items.reduce((prev, curr) => prev + (curr.count * curr.price), 0);

    //
    // useEffect(() => {
    //     (async () => {
    //         setProducts(await getUserBasket())
    //     })()
    // }, []);

    return (
        <BasketContext.Provider value={{products, addProductToBasket, removeFromBaster}}>
            {children}
        </BasketContext.Provider>
    );
};

export default BasketContextProvider;