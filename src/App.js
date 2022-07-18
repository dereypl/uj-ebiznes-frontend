import './App.css';
import Products from "./components/views/products/Products";
import StylesProvider from "./ui-config/StylesProvider";
import TopBar from "./components/shared/topBar/TopBar";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom"

import Basket from "./components/views/basket/Basket";
import BasketContextProvider from "./context/BasketContext";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 5rem;
`;

function App() {
    return (
        <StylesProvider>
            <BasketContextProvider>
                <TopBar/>
                <Wrapper>
                    <Routes>
                        <Route path="" element={<Products/>}/>
                        <Route path="basket" element={<Basket/>}/>
                    </Routes>
                </Wrapper>
            </BasketContextProvider>
        </StylesProvider>
    );
}

export default App;
