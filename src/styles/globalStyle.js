import { createGlobalStyle } from 'styled-components'

import BackgroundNoise from '../assets/background/noise.png'

export default createGlobalStyle`

:root {
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}

body {
        font-size: 1.6rem;
        overflow-x: hidden;
        width: 100vw;
    }
    body::after {
        content: '';
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        opacity: .2;
        mix-blend-mode: darken;
        pointer-events: none;
        background-image: url('${BackgroundNoise}');
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    appearance: none;
}

`
