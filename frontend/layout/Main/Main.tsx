import React from 'react';

import {
    MainWrapper,MainContainer
} from "./Main.styles"

import Hero from "../Hero"
import Slider from "@components/Slider"

const Main = ({children}) => {

    const slides = [
        {id: 1, name: 'Crime'},
        { id: 2, name: 'Action'},
        {id: 3, name: 'Sci-Fi'},
        {id: 4, name: 'Horror'},
        {id: 5, name: 'Drama'},
        {id: 6, name: 'Fantasy'},
        {id: 7, name: 'Family'},
        {id: 8, name: 'Comedy'},
        {id: 9, name: 'Adventure'},
        {id: 10, name: 'Thriller'},
        {id: 11, name: 'Facts'},
        {id: 9, name: 'Adventure'},
        {id: 10, name: 'Thriller'},
        {id: 11, name: 'Facts'},
        {id: 11, name: 'Facts'},
        {id: 9, name: 'Adventure'},
        {id: 10, name: 'Thriller'},
        {id: 11, name: 'Facts'},
    ]

    return (
        <MainWrapper>
           <Hero/>
           <Slider
            items={slides}
            />
            <MainContainer>
            {children}
            </MainContainer>
        </MainWrapper>
    )
}

export default Main