import React, {useState} from "react";

const initialState = {products: []}

export const BasketContext = React.createContext(initialState);

export const BasketContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const addProductToBasket = (prod) => setProducts([...products, prod])
    const removeFromBasket = (id) => setProducts(products.filter(prod => prod.id !== id))
    const clearBasket = () => setProducts([])

    return (
        <BasketContext.Provider value={{products, clearBasket, addProductToBasket, removeFromBasket}}>
            {children}
        </BasketContext.Provider>
    );
};

export default BasketContextProvider;