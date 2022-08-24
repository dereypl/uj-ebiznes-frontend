import React, {useContext, useState} from 'react';
import {useDispatch,} from "react-redux";
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
import {BasketContext} from "../../../context/BasketContext";


const Basket = () => {
    let navigate = useNavigate();
    const {products, removeFromBaster} = useContext(BasketContext)
    const dispatch = useDispatch();
    const [paymentSuccessful, setPaymentSuccessful] = useState(false)

    const handlePayment = () => {
        // dispatch(clearBasket())
        // setPaymentSuccessful(true)
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
                            <TableHeader>Cena</TableHeader>
                            <TableHeader/>
                        </Row>
                        </thead>
                        <tbody>
                        {products.map((product, index) => (<DataRow key={product.id+index}>
                            <Data>{product.name}</Data>
                            <Data>{product.price.toFixed(2)} zł</Data>
                            <Data onClick={() => removeFromBaster(product.id)}>
                                <RemoveButton>Usuń produkt<DeleteStyled/></RemoveButton>
                            </Data>
                        </DataRow>))}
                        </tbody>
                    </Table>
                    <BasketSummary>
                        Razem do zapłaty:
                        <div>{0} zł</div>
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