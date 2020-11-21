import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 3em;
    line-height: 3.5em;
    text-align: center;
    margin: 1.2rem 0;
`;

export const Paragraph = styled.p`
    font-size: 1em;
    line-height: 1.2em;
    margin: 1rem 0;
    padding: .3rem;
`;

export const Image = styled.img`
    margin: 1.2rem auto;
    padding: .4rem;
    max-width: 90%;
    height: auto;
`

export const ImageDiv = styled.div`
    width: 100%;
    margin: .5rem 0;
    padding: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Code = styled.code`
    display: inline-block;
    padding: 1rem;
    font-family: monospace;
    font-size: 0.9em;
    background-color: #e0d6f9;
    border: 1px solid black;
    border-radius: 5px;
    justify-self: center;
    align-self: center;
`

export const Pre = styled.pre`
    display: grid;
`