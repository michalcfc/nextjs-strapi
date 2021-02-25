
import React from 'react';
import Link from "next/link"

import {
    FooterWrapper,
} from "./Footer.styles"

const Footer = () => {
    return (
        <FooterWrapper>
            Copyright © 2021 
            <Link href="https://github.com/michalcfc/e-commerce">
                <a target="_blank" rel="noreferrer">
                </a>
            </Link>
        </FooterWrapper>
    )
}

export default Footer