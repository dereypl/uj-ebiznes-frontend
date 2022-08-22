import './App.css';
import Products from "./components/views/products/Products";
import StylesProvider from "./ui-config/StylesProvider";
import TopBar from "./components/shared/topBar/TopBar";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom"

import Basket from "./components/views/basket/Basket";
import BasketContextProvider from "./context/BasketContext";
import User from "./components/views/auth/User";
import Login from "./components/views/public/Login";
import {AuthContextProvider} from "./context/AuthContext";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 5rem;
`;

function App() {
    return (
        <StylesProvider>
            <AuthContextProvider>
                <BasketContextProvider>
                    <Wrapper>
                        <Routes>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/products" element={<Products/>}/>
                            <Route path="basket" element={<Basket/>}/>
                            {/*<Route path="/user/info" element={<User/>}/>*/}
                        </Routes>
                    </Wrapper>
                </BasketContextProvider>
            </AuthContextProvider>
        </StylesProvider>
    );
}

export default App;
