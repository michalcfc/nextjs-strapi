import React from 'react';
import {
    MenuWrapper,
    MenuItem
} from "./Menu.styles"

import { MenuProps } from "./Menu.d"


const Menu: React.FC<MenuProps> = ({
    links,
}) => {
    return (
        <MenuWrapper>
            {links.map((link, id) => {
               return <MenuItem key={id}>{link.name}</MenuItem> 
            })}
            <MenuItem.Icon>
            </MenuItem.Icon>
            
            <MenuItem>
                Hi, Michal
            </MenuItem>
        </MenuWrapper>
    )
}

export default Menu