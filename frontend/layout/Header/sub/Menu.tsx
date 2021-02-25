import React from 'react';
import {
    MenuWrapper,
    MenuItem
} from "./Menu.styles"

import Link from 'next/link'

import { MenuProps } from "./Menu.d"


const Menu: React.FC<MenuProps> = ({
    links,
}) => {
    return (
        <MenuWrapper>
            {links.map((link, id) => {
               return <MenuItem key={id}>
                   <Link href="/contact">{link.name}</Link>
                </MenuItem> 
            })}
            
        </MenuWrapper>
    )
}

export default Menu