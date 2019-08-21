import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Arimo|Lato&display=swap');

    :root{
        --paleBlue: #d6defa;
        --paleYellow: #faf2d6;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }   
    
    body{
        margin: 0;
        padding: 0;
        font-family: Lato sans-serif;
        font-size: 1em;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: Arimo sans-serif;
    }
`
