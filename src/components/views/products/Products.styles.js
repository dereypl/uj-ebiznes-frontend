import styled from "styled-components";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-right: 10px;
`;

export const AddShoppingCartIconStyled = styled(AddShoppingCartIcon)`
  margin-left: 0.5rem;
`;

export const AddToBasketButton = styled.button`
  display: flex;
  padding: 0;
  border: none;
  width: 12rem;
  height: 3rem;
  border-radius: 1rem;
  font-size: 1rem;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: lightgray;

  &:hover {
    background-color: whitesmoke;
    color: #282c34;
  }
`;

export const Table = styled.table`
  border-spacing: 0 1rem;
  width: 100%;
`;
export const Row = styled.tr`
`;
export const DataRow = styled.tr`
  width: 100%;
  height: 5rem;
  cursor: pointer;
`;
export const TableHeader = styled.th`
  color: #7a8287;
  height: 2.5rem;
  min-width: 5rem;
  text-align: left;
  font-size: 1.1rem;
  padding-left: 3rem;
`;
export const Data = styled.td`
  margin-top: 3rem;
  padding-left: 3rem;
  background-color: white;
  height: 5rem;

  &:first-of-type {
    border-radius: 0.8rem 0 0 0.8rem;
    -moz-border-radius: 0.8rem 0 0 0.8rem;
    -webkit-border-radius: 0.8rem 0 0 0.8rem;
  }

  &:last-of-type {
    border-radius: 0 0.8rem 0.8rem 0;
    -moz-border-radius: 0 0.8rem 0.8rem 0;
    -webkit-border-radius: 0 0.8rem 0.8rem 0;
  }
`;
