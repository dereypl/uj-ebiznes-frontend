import React, {useState} from 'react';
import {useDispatch,} from "react-redux";
import useBasket from "../../hooks/useBasket";
import {useNavigate} from "react-router-dom";
import {
    BasketFooter,
    BasketHeader,
    BasketSummary,
    CheckCircleOutlineIconStyled,
    Data,
    DataRow,
    DeleteStyled,
    PaymentSuccessFullWrapper,
    RemoveButton,
    Row,
    Table,
    TableHeader,
    Wrapper
} from "./Basket.styles";
import TopBar from "../../shared/topBar/TopBar";


const Basket = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const {items: products, totalPrice, handleProductRemove, clearBasket} = useBasket()
    const [paymentSuccessful, setPaymentSuccessful] = useState(false)

    const handlePayment = () => {
        dispatch(clearBasket())
        setPaymentSuccessful(true)
    }

    return (
        <Wrapper>
            <TopBar/>
            {paymentSuccessful ?
                <>
                    <PaymentSuccessFullWrapper>
                        <CheckCircleOutlineIconStyled fontSize="large"/>
                        Transakcja przebiegła pomyślnie
                        <RemoveButton marginTop={'5rem'} onClick={() => navigate('/')}>Wróc do sklepu</RemoveButton>
                    </PaymentSuccessFullWrapper>
                </>
                :
                <>
                    <BasketHeader>Zawartość koszyka:</BasketHeader>
                    <Table>
                        <thead>
                        <Row>
                            <TableHeader>Nazwa</TableHeader>
                            <TableHeader>Opis</TableHeader>
                            <TableHeader>Cena</TableHeader>
                            <TableHeader>Ilość</TableHeader>
                            <TableHeader/>
                        </Row>
                        </thead>
                        <tbody>
                        {products.map((product) => (<DataRow key={product._id}>
                            <Data>{product.name}</Data>
                            <Data>{product.description}</Data>
                            <Data>{product.price.toFixed(2)} zł</Data>
                            <Data>{product.count}</Data>
                            <Data onClick={() => handleProductRemove(product._id)}>
                                <RemoveButton>Usuń produkt<DeleteStyled/></RemoveButton>
                            </Data>
                        </DataRow>))}
                        </tbody>
                    </Table>
                    <BasketSummary>
                        Razem do zapłaty:
                        <div>{totalPrice.toFixed(2)} zł</div>
                    </BasketSummary>
                    <BasketFooter>
                        <RemoveButton onClick={() => navigate('/')}>Wróc do sklepu</RemoveButton>
                        <RemoveButton onClick={handlePayment}>Kupuję i płacę</RemoveButton>
                    </BasketFooter>
                </>}
        </Wrapper>
    );
};

export default Basket;