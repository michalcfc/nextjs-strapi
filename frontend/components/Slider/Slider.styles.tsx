import styled from "styled-components";

type DataProps = {
}

export const SliderWrapper = styled.div<DataProps>`
    display: flex;
    width: 100%;
    margin-top: 1rem;
    position: relative;
    align-items: center;
    justify-content: center;
`

export const SliderStyle = styled.div<DataProps>`
    width: 80%;
    display: flex;
    padding: 1rem;
    overflow: hidden;
    scroll-behavior: smooth;
`;

export const SliderItem = styled.div<DataProps>`
    padding: 1rem;
    border-radius: 0.4rem;
    border: 1px solid transparent;
    background: ${({theme}) => theme.colors.white};
    box-shadow: ${({theme}) => theme.boxShadow};
    &:hover {
        cursor: pointer;
        border: ${({theme}) => `1px solid ${theme.colors.purple}`};
        box-shadow: ${({theme}) => theme.boxShadowColor};
      };
`
