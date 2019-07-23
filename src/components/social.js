import React from 'react'
import styled from 'styled-components'

const Social = styled.div`
    padding-right: 10px;
    font-size: 2rem;
    height: 2rem;
    overflow: hidden;
    margin-right: 5px;

    a {
        text-decoration: none;
        background-color: #ddb456;
        color: #a07514;
        margin: 0;
        padding: .2rem;
    }

    a:hover{
      background-color: #a07514;
      color: #ddb456;
    }

`;

export const SocialBlock = ({children}) => {
    return (
        <Social>
            {children}
        </Social>
    )
}