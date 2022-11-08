import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
   

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  .circles {
  width: 400px;
  height: 400px;
  position: relative;
  perspective: 50000px;
  color: hsl(193, 81%, 60%);
  z-index: -5;
}

.circles span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  background: currentColor;
  width: 18.4%;
  height: 18.4%;
  border-radius: 50%;
}

.circles div {
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 13.4px solid;
  border-right: 13.4px solid;
  border-color: 13.4px transparent;
  border-radius: 50%;
  z-index: -5;
}

.circles div:nth-child(1) {
  animation: anim-1 4s linear infinite;
}
.circles div:nth-child(2) {
  animation: anim-2 4s linear infinite;
}
.circles div:nth-child(3) {
  animation: anim-3 4s linear infinite;
}

@keyframes anim-1 {
  from {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(0);
  }
  to {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
  }
}

@keyframes anim-2 {
  from {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(0);
  }
  to {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
  }
}
@keyframes anim-3 {
  from {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(0);
  }
  to {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
  }
}
@media screen and (max-width: 768px) {
  .circles {
    width: 200px;
    height: 200px;
  }
}

`;

export default GlobalStyles;
