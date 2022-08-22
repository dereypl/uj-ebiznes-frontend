import React, {useEffect, useState} from "react";
import {getUserBasket} from "../api/products";

const initialState = {products: []}

export const ProductsContext = React.createContext(initialState);

export const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            setProducts(await getUserBasket())
        })()
    }, []);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    );
};

export default BasketContextProvider;