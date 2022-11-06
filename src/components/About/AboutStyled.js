import styled from "styled-components";

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-left: 32px;
  column-gap: 2rem;
  &:first-of-type {
    margin-left: 0px;
  }
  margin-bottom: 80px;

  /* remove scrollbar  */

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    column-gap: 0;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;
export const CarouselMobileScrollNode = styled.div`
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
  }
`;

export const CarouselItem = styled.div`
  max-width: 196px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 32px;
    min-width: 124px;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    overflow: visible;
    position: relative;
    height: fit-content;

    ${(props) =>
      props.active === props.index ? `opacity: 1` : `opacity: 0.5`};
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 4px;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.02em;
  padding-right: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-right: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-right: 0;
  }
`;

export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
  transform: ${(props) =>
    props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 6px;
  height: 6px;
`;
