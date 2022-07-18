import styled, {css} from "styled-components";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

export const ShoppingCartIconStyled = styled(AddShoppingCart)`
  margin-right: 0.5rem;
`;

export const FixedBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #282c34;
  position: fixed;
  top: 0;
  padding-right: 1rem;
`;

export const CurrentUser = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 100%;
  font-size: 1.2rem;
`;

export const Basket = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  width: 18rem;
  height: 65%;
  font-size: 1.2rem;

  
  ${({itemsCount}) => itemsCount && css`
    background-color: #0074bd;
    border-radius: 0.8rem;
    cursor: pointer;

    &:hover {
      background-color: whitesmoke;
      color: #282c34;
    }
  `}
`;
