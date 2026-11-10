import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: 'montserrat', sans-serif;
    }

    body {
        background: #000;
        min-width: 320px;
        overflow-x: hidden;
    }
`;