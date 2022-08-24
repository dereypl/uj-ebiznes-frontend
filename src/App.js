import './App.css';
import Products from "./components/views/products/Products";
import StylesProvider from "./ui-config/StylesProvider";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom"

import Basket from "./components/views/basket/Basket";
import BasketContextProvider from "./context/BasketContext";
import Auth from "./components/views/auth/Auth";
import Login from "./components/views/public/Login";
import {AuthContextProvider} from "./context/AuthContext";
import ProductsContextProvider from "./context/ProductsContext";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 5rem;
`;

function App() {
    return (
        <StylesProvider>
            <AuthContextProvider>
                <ProductsContextProvider>
                    <BasketContextProvider>
                        <Wrapper>
                            <Routes>
                                <Route path="/" element={<Login/>}/>
                                <Route path="/products" element={<Products/>}/>
                                <Route path="/basket" element={<Basket/>}/>
                                <Route path="/auth" element={<Auth/>}/>
                            </Routes>
                        </Wrapper>
                    </BasketContextProvider>
                </ProductsContextProvider>
            </AuthContextProvider>
        </StylesProvider>
    );
}

export default App;
