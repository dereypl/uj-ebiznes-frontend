import React, {useContext} from 'react';
import {useMatch, useNavigate} from "react-router-dom";
import {Basket, CurrentUser, FixedBar, ShoppingCartIconStyled} from "./TopBar.styles";
import {BasketContext} from "../../../context/BasketContext";
import {useSelector} from "react-redux";
import {getAuthStateRoot} from "../../../store/reducers/auth";

const TopBar = () => {
    let navigate = useNavigate();
    const {user} = useSelector(getAuthStateRoot)
    const isBasketRoute = useMatch("basket")
    const {products} = useContext(BasketContext)
    const productsCount = products.length

    const handleGoToBasket = () => productsCount ? navigate('/basket') : null

    return (
        <FixedBar>
            <CurrentUser>
                {user}
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