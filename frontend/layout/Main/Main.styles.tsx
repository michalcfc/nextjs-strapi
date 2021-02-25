import styled from "styled-components";

export const MainWrapper = styled.div`
  display: grid;
  grid-area: main;
  background:  ${({theme}) => theme.bacgrkoundMain};
`;

export const MainContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
`