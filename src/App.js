import './App.css';
import Products from "./components/views/products/Products";
import StylesProvider from "./ui-config/StylesProvider";
import TopBar from "./components/shared/topBar/TopBar";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom"

import Basket from "./components/views/basket/Basket";
import BasketContextProvider from "./context/BasketContext";
import User from "./components/views/auth/User";
import Login from "./components/views/auth/Login";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 5rem;
`;

function App() {
    return (
        <StylesProvider>
            <BasketContextProvider>
                <Wrapper>
                    <Routes>
                        <Route path="" element={<Products/>}/>
                        <Route path="basket" element={<Basket/>}/>
                        <Route path="/user/info" element={<User />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Wrapper>
            </BasketContextProvider>
        </StylesProvider>
    );
}

export default App;
