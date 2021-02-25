import styledMap from "styled-map";
import { lighten } from "polished";
import styled from "styled-components";

type DataProps = {
  children?: string
  buttonColor?: string
  buttonBackground?: string
  danger?: string
  hero?: boolean
}

const buttonColor = styledMap`
  default: ${({ theme }) => theme.colors.white};
  secondary: ${({ theme }) => theme.colors.dark};
  danger:  ${({ theme }) => theme.colors.white};
`;

const buttonBackground = styledMap`
  default: ${({ theme }) => theme.colors.purple};
  secondary: ${({ theme }) => theme.colors.lightgray};
  danger:  ${({ theme }) => theme.colors.red};
`;

const buttonHover = styledMap`
  default: ${({ theme }) => lighten(0.1, theme.colors.purple)};
  secondary: ${({ theme }) => lighten(0.1, theme.colors.lightGray)};
  danger:  ${({ theme }) => lighten(0.1, theme.colors.red)};
`;

const buttonSize = styledMap`
  default: .47rem .75rem;
  secondary: .47rem .75rem;
  hero:  1rem 1.75rem;
`;

const fontSize = styledMap`
  hero: .9rem;
  default: .8rem
`

const buttonShadow = styledMap`
  default: 0px 12px 28px rgba(61,177,61, 0.38);
`



export const ButtonWrapper = styled.button<DataProps>`
  cursor: pointer;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  font-size: ${fontSize};
  margin: ${({theme}) => theme.spacing.xs};
  border-radius: .25rem;
  border: 1px solid transparent;
  color: ${buttonColor};
  padding: ${buttonSize};
  box-shadow: ${buttonShadow};
  background: ${buttonBackground};
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:hover {
    background: ${buttonHover};
  }
`;