import styled from "styled-components";

export const HeroWrapper = styled.picture`
    width: 100%;
    height: 42rem;
    object-fit: cover;
    background-image: url(img/hero_movie.jpg);
`;


export const HeroContentWrapper = styled.div`
    height: 100%;
    display: flex;
    padding: 1rem;
    margin: 0 auto;
    max-width: 1140px;
    align-items: center;
    color: ${({theme}) => theme.colors.white}
`

export const HeroContent = styled.div`
    width: 50%;
    font-size: 3.4rem;
`

export const HeroContetRight = styled.div`
    width: 50%;
    font-size: 3.4rem;
`

export const HeroContentLeft = styled(HeroContent)`
    
`;

export const HeroContentRight = styled(HeroContent)`
    
`;

export const HeroTitle = styled.h2`
    font-size: 5.4rem;
`

export const HeroDescription = styled.p`

`

