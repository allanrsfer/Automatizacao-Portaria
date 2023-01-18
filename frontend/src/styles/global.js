import { createGlobalStyle } from 'styled-components'
import Image from "../assets/bgimage.png";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-image: url(${Image});
    background-size: 1500px 720px; 
    background-repeat: no-repeat;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, select {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
    outline: none;
  }

  a{
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`