import {useDispatch, useSelector} from "react-redux";
import {clearBasket, getBasketStateRoot, removeProduct} from "../../store/reducers/basket";

const useBasket = () => {
    const dispatch = useDispatch();
    const {items} = useSelector(getBasketStateRoot)
    const itemsCount = items.reduce((prev, curr) => prev + curr.count, 0);
    const totalPrice = items.reduce((prev, curr) => prev + (curr.count * curr.price), 0);

    const handleProductRemove = (id) => dispatch(removeProduct(id))

    return {items, itemsCount, totalPrice, handleProductRemove, clearBasket}
};

export default useBasket;