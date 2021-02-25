import React from 'react';

import Main         from "./Main"
import Header       from "./Header"
import Footer       from "./Footer"
import Wrapper      from "./Wrapper"


const Layout = ({children}) => {

    const menuLinks = [
        {
            name: 'TV'
        },
        {
            name: 'Netflix'
        },
        {
            name: 'Contact'
        },
    ]
    return (
       
        <Wrapper>
            <Header 
                links={menuLinks}
            />
            <Main>
                {children}
            </Main>
            <Footer/>
        </Wrapper>
        
    )
}

export default Layout