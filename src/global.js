import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }

    :root {
        // Dark elements
        --DarkBlue: hsl(209, 23%, 22%);
        --DarkBlueHover: hsl(209, 23%, 19%);
        --VeryDarkBlueBackground: hsl(207, 26%, 17%);

        // Light mode text
        --VeryDarkBlue: hsl(200, 15%, 8%);
        // Light mode input
        --DarkGray: hsl(0, 0%, 52%);
        --VeryLightGrayBackground: hsl(0, 0%, 98%);
        --White: hsl(0, 0%, 100%);
        --WhiteHover: hsl(0, 0%, 75%);
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }
`
