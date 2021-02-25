import React from 'react';

import {
    BrandLogo,
    HeaderWrapper,
    HeaderContent
} from "./Header.styles"

import Menu from "./sub/Menu"

const Header = ({
    links, 
}) => {

    return (
        <HeaderWrapper>
            <HeaderContent>
            <BrandLogo>Demo Store</BrandLogo>
            <Menu 
                links={links}
            />
            </HeaderContent>
        </HeaderWrapper>
    )
}

export default Header