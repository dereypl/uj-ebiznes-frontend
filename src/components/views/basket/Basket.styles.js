import styled from "styled-components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Delete from "@mui/icons-material/Delete";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BasketHeader = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 3rem;
  margin-bottom: 2rem;
`;

export const CheckCircleOutlineIconStyled = styled(CheckCircleOutlineIcon)`
  margin-right: 2rem;
`;

export const PaymentSuccessFullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  padding: 3rem;
  margin-bottom: 2rem;
  color: green;
  font-size: 3rem;
`;

export const BasketSummary = styled.div`
  display: flex;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 3rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const BasketFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 3rem;
`;

export const DeleteStyled = styled(Delete)`
  margin-left: 0.5rem;
`;

export const RemoveButton = styled.button`
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
  margin-top: ${({marginTop}) => marginTop || '0'};

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