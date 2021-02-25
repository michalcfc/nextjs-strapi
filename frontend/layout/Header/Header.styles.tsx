import styled from "styled-components";

type DataProps = {
  position?: boolean
}

export const BrandLogo = styled.div<DataProps>`
  margin: 1rem;
`

export const HeaderWrapper = styled.header<DataProps>`
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 1;
    grid-area: header;
    transition: all 0.5s;
    box-shadow: 0px 0px 10px rgba(0,0,0,  0.06);
    background: ${({theme, position}) => position && theme.colors.white};
    position: ${({position}) => position ? 'fixed' : 'block'};
`;

export const HeaderContent = styled.div<DataProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`