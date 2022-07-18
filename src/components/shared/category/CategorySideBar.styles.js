import styled, {css} from "styled-components";

export const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  min-width: 16rem;
  height: 100%;
  margin-right: 2rem;
`;

export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 8rem;
  margin-top: 0.5rem;
  background-color: #eeeeee;
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
    color: #282c34;
  }

  ${({active}) => active && css`
    background-color: #0074bd;
    color: white;
    &:hover {
      background-color: #0074bd;
    }
  `}
`;
