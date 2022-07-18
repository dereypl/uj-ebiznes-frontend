import React, {useEffect, useState} from "react";
import {getUserBasket} from "../api/products";

const initialState = {products: []}

export const BasketContext = React.createContext(initialState);

export const BasketContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            setProducts(await getUserBasket())
        })()
    }, []);

    return (
        <BasketContext.Provider value={{products, setProducts}}>
            {children}
        </BasketContext.Provider>
    );
};

export default BasketContextProvider;