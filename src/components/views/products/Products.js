import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CategorySideBar from "../../shared/category/CategorySideBar";
import {
    AddShoppingCartIconStyled,
    AddToBasketButton,
    Data,
    DataRow,
    Row,
    Table,
    TableHeader,
    Wrapper
} from "./Products.styles";
import TopBar from "../../shared/topBar/TopBar";
import {ProductsContext} from "../../../context/ProductsContext";
import ProductsService from "../../../services/ProductsService";
import {getCategoriesStateRoot} from "../../../store/reducers/categories";
import {BasketContext} from "../../../context/BasketContext";

const Products = () => {
    const dispatch = useDispatch();
    const {addProductToBasket} = useContext(BasketContext)
    const {activeId: activeCategoryId, list: {loading}} = useSelector(getCategoriesStateRoot)
    const {products, setProducts} = useContext(ProductsContext)
    const [productsByCategory, setProductsByCategory] = useState([])

    useEffect(() => {
        (async () => {
            const prods = await ProductsService.fetchAll()
            setProducts(prods)
            setProductsByCategory(prods)
        })()

    }, [dispatch]);

    useEffect(() => {
        if (activeCategoryId === 0) setProductsByCategory(products)
        else {
            const filteredProducts = products.filter(prod => prod.categoryId === activeCategoryId)
            setProductsByCategory(filteredProducts)
        }
    }, [activeCategoryId])

    return (
        <Wrapper>
            <TopBar/>
            <CategorySideBar/>
            {loading ?
                <div>Loading...</div>
                : <Table data-id={'products-list'}>
                    <thead>
                    <Row>
                        <TableHeader>Nazwa</TableHeader>
                        <TableHeader>Cena</TableHeader>
                        <TableHeader/>
                    </Row>
                    </thead>
                    <tbody>
                    {productsByCategory.map((product) => (
                        <DataRow key={product.id}>
                            <Data>{product.name}</Data>
                            <Data>{product.price.toFixed(2)} zł</Data>
                            <Data onClick={() => addProductToBasket(product)}>
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