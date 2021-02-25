import React from 'react';

import {
    HeroWrapper,
    HeroContentWrapper,
    HeroContentLeft,
    HeroContentRight,
    HeroTitle,
    HeroDescription
} from "./Hero.styles"
import Button from '@components/Button';




const Hero = () => {
    return (
        <HeroWrapper>
            <HeroContentWrapper>
                <HeroContentLeft>
                <HeroTitle>
                    I care a lot
                </HeroTitle>
                <HeroDescription>
                    A crooked legal guardian who drains the savings of her elderly wards meets her match when a woman she tries to swindle turns out to be more than she first appears.
                </HeroDescription>
                <Button
                    hero
                    name="Watch now" 
                    onClick={() => {}}
                />
                </HeroContentLeft>
                <HeroContentRight>
                    {/* right */}
                </HeroContentRight>
            </HeroContentWrapper>
        </HeroWrapper>

    )
}

export default Hero