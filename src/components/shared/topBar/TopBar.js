import React, {useContext} from 'react';
import {useMatch, useNavigate} from "react-router-dom";
import {Basket, CurrentUser, FixedBar, ShoppingCartIconStyled} from "./TopBar.styles";
import {BasketContext} from "../../../context/BasketContext";

const TopBar = () => {
    let navigate = useNavigate();
    const isBasketRoute = useMatch("basket")
    const {products} = useContext(BasketContext)
    const productsCount = products.length

    const handleGoToBasket = () => productsCount ? navigate('/basket') : null

    return (
        <FixedBar>
            <CurrentUser>
                {/*//fixme: add user*/}
                Testowy Użytkownik
            </CurrentUser>
            {!isBasketRoute &&
                <Basket itemsCount={productsCount} onClick={handleGoToBasket}>
                    <ShoppingCartIconStyled/>
                    {productsCount ? `(${productsCount})  Przejdź do koszyka` : '  Koszyk pusty'}
                </Basket>}
        </FixedBar>
    );
};

export default TopBar;