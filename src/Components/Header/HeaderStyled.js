import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 320px repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: grid;
    grid-template-columns: 200px repeat(4, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  grid-area: 1/1/2/2;
  flex-direction: row;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1 / 1 / 2 / 3;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Div2 = styled.div`
  display: flex;
  grid-area: 1/2/2/4;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-area: 1 / 2 / 2 / 5;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 2 / 1 / 3 / 6;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: space-between;
    align-items: center;
    grid-area: 1 / 3 / 2 / 6;
  }
`;

// Social Icons
export const SocialIcons = styled.a`
  transition: 0.5s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: ${(props) => (props.main ? "2.5rem" : "2rem")};
  font-weight: ${(props) => (props.main ? "500" : null)};
  line-height: 32px;
  display: flex;
  width: 100%;

  justify-content: ${(props) => (props.left ? "start" : "center")};
  align-items: center;
  color: ${(props) => (props.white ? "#fff" : "rgba(255, 255, 255, 0.75)")};
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;
