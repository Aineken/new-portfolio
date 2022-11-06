import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const RightSection = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  align-self: center;
  justify-content: end;
  align-items: center;
  margin-right: 96px;
  z-index: -1;
  ::selection {
    background: transparent;
  }
  ::-moz-selection {
    background: transparent;
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    position: relative;
    justify-content: center;
    height: max-content;
    margin: 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
`;
