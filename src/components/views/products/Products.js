import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductsService from "../../../services/ProductsService";
import {getProductsStateRoot} from "../../../store/reducers/products";
import {addProduct} from "../../../store/reducers/basket";
import {getCategoriesStateRoot} from "../../../store/reducers/categories";
import CategorySideBar from "../../shared/category/CategorySideBar";
import {AddShoppingCartIconStyled, AddToBasketButton, Data, DataRow, Row, Table, TableHeader, Wrapper} from "./Products.styles";

const Products = () => {
    const dispatch = useDispatch();
    const {list: {items: products, loading}} = useSelector(getProductsStateRoot)
    const {activeId} = useSelector(getCategoriesStateRoot)

    useEffect(() => {
        if (activeId) dispatch(ProductsService.fetchByCategoryId({id: activeId}))
        else dispatch(ProductsService.fetchAll())

    }, [dispatch, activeId]);

    const handleAddToBasket = (product) => dispatch(addProduct(product))

    return (
        <Wrapper>
            <CategorySideBar/>
            {loading ?
                <div>Loading...</div>
                : <Table>
                    <thead>
                    <Row>
                        <TableHeader>Nazwa</TableHeader>
                        <TableHeader>Opis</TableHeader>
                        <TableHeader>Cena</TableHeader>
                        <TableHeader/>
                    </Row>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <DataRow key={product._id}>
                            <Data>{product.name}</Data>
                            <Data>{product.description}</Data>
                            <Data>{product.price.toFixed(2)} zł</Data>
                            <Data onClick={() => handleAddToBasket(product)}>
                                <AddToBasketButton>Dodaj do koszyka<AddShoppingCartIconStyled/></AddToBasketButton>
                            </Data>
                        </DataRow>
                    ))}
                    </tbody>
                </Table>}
        </Wrapper>
    );
};

export default Products;