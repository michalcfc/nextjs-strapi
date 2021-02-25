import React from "react"
import {
    ArrowWrapper
} from "./Arrow.styles"
import {ArrowProps } from "./Arrow.d"

const Arrow: React.FC<ArrowProps> = ({
    right,
    left,
    down,
    up,
    onClick,
}) => (

<ArrowWrapper
    up={up}
    down={down}
    left={left}
    right={right}
    onClick={onClick} 
/>
)

export default Arrow;
