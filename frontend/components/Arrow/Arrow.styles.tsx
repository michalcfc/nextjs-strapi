import styledMap from "styled-map";
import styled from "styled-components";

type DataProps = {
    up?: boolean
    down?: boolean
    left?: boolean
    right?: boolean
}

const arrows = styledMap`
    up: rotate(-45deg);
    left: rotate(-132deg);
    right: rotate(45deg);
    down:  rotate(135deg);
    default: rotate(-45deg);
`;

const positionArrow = styledMap`
    up: 0;
    left: 0;
    right: 0;
    down:  0;
    default: 0;
`;

export const ArrowWrapper =styled.div<DataProps>`
    cursor: pointer;
    display: inline-block;
    font-size: 1.4rem;
    width: 1em;
    height: 1em;
    line-height: 1em;
    border: ${({theme}) => `1px solid ${theme.colors.black}`};
    transform: ${arrows};
    border-left: transparent;
    border-bottom: transparent;
    transition: all 0.5s ease-in-out;
`;


