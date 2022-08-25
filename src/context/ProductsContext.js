import React, {useState} from "react";

const initialState = {products: []}

export const ProductsContext = React.createContext(initialState);

export const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;