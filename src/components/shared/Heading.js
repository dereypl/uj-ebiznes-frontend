import styled from "styled-components";

export const Heading = styled.h1`
  display: flex;
  font-size: '2.3rem';
  font-weight: 600;
  margin: ${({margin}) => margin || 0};
  padding: 0;
`;