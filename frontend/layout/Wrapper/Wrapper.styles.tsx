import styled from "styled-components";

export const WrapperStyles = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 60px 1fr 50px;
  grid-template-columns: 80px 1fr 50px;
  grid-template-areas:
    "header header header" 
    "main main main" 
    "footer footer footer";
`;