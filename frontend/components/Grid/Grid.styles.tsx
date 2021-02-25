import styled from "styled-components"
import { ReactElement } from "react"

type DataProps = {
    rows?: number
    rowGap?: number
    columns?: string
    gridGap?: string
    columnGap?: number
    autoColumns?: string
    autoFlow?: string
}

export const GridStyles = styled.div<DataProps>`
    display: grid;
    grid-gap: ${({gridGap}) => gridGap};
    row-gap: ${({rowGap}) => rowGap};
    column-gap: ${({columnGap}) => columnGap};
    grid-template-rows: ${({rows}) => rows};
    grid-template-columns: ${({columns}) => columns};
    grid-auto-columns:  ${({autoColumns}) => autoColumns};
    grid-auto-flow: ${({autoFlow}) => autoFlow};
    & a {
        text-decoration: none;
    }
`