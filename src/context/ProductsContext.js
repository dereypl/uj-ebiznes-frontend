import React, {useEffect, useState} from "react";
import {getUserBasket} from "../api/products";

const initialState = {products: []}

export const ProductsContext = React.createContext(initialState);

export const ProductsContextWrapper = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            setProducts(await getUserBasket())
        })()
    }, []);

    return (
        <ProductsContextWrapper.Provider value={{products, setProducts}}>
            {children}
        </ProductsContextWrapper.Provider>
    );
};

export default BasketContextProvider;