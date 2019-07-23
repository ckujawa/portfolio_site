import React from "react";
import styled from 'styled-components';
import {above} from '../utilities/breakpoints'

const StyledBurgerMenu = styled.nav`
    

    .menu-item{
        margin: 0 10px;
        font-family: Arimo sans-serif;
        text-decoration: none;
        font-size: 1.5em;
        color: white;
    }

    ${ above.med`
        position: absolute;
        ${ props => props.Bottom && `bottom: ${props.Bottom};`}
        ${ props => props.Right && `right: ${props.Right};`}
        ${ props => props.Top && `top: ${props.Top};`}
        ${ props => props.Left && `left: ${props.Left};`}
        display: flex;
    `}
`;

export default ({children, Top, Right, Bottom, Left}) => (
    <StyledBurgerMenu Top={Top} Right={Right} Bottom={Bottom} Left={Left}>
        {children}
    </StyledBurgerMenu >
)