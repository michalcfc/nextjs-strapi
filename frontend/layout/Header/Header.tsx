import React, {useState, useEffect} from 'react';

import {
    BrandLogo,
    HeaderWrapper,
    HeaderContent
} from "./Header.styles"

import Menu from "./sub/Menu"

const SCROLL_DISTANCE = 10

const Header = ({
    links, 
}) => {
        const [scroll, setScroll] = useState(false)
        
        useEffect(() => {
          window.addEventListener("scroll", () => {
            setScroll(window.scrollY > SCROLL_DISTANCE);
          });
        }, []); 
     
    return (
        <HeaderWrapper
          position={scroll}
        >
            <HeaderContent>
            <BrandLogo>Popcorn Movies</BrandLogo>
            <Menu 
                links={links}
            />
            </HeaderContent>
        </HeaderWrapper>
    )
}

export default Header