import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        // max-width: 85.375em;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text; 
    }

    /* Scroolbar */
    body::-webkit-scrollbar{
        width: 0.6vw;
    }
    body::-webkit-scrollbar-thumb{
        background-color: #656d85;
        border-radius: 1vw;
        &:hover{
            background-color: #8590b1;
        }
    }
    body::-webkit-scrollbar-track{
        background-color: #1c222bce;
    }
    ::selection{
        background: #8892b079;
        color: #d6e2f8;
    }
    body {
        margin: 0;
        width: 100%;
        // width: 85.375em;
        min-height: 100%;
        overflow-x: hidden;
        box-sizing: border-box;
        background-color: #001229;
    }
`;

export default GlobalStyle;

// "homepage": "https://someshvk.github.io/somesh-portfolio",
// "predeploy": "npm run build",
//     "deploy": "gh-pages -d build"