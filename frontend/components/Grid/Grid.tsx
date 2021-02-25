
import {
    GridStyles
} from "./Grid.styles"

import { GridProps } from "./Grid.d"


const Grid: React.FC<GridProps> = ({
    rows,
    rowGap,
    columns, 
    gridGap,
    children, 
    columnGap,
    autoColumns,
    autoFlow
}) => {
    return (
        <GridStyles 
            rows={rows}
            rowGap={rowGap}
            gridGap={gridGap}
            columns={columns}
            columnGap={columnGap}
            autoColumns={autoColumns}
            autoFlow={autoFlow}
        >
            {children}
        </GridStyles>
    )
}

export default Grid