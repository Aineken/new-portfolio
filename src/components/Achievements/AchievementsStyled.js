import styled from "styled-components";

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 3rem;
  column-gap: 2rem;
  margin: 2.5rem 0 4rem;
`;

export const Card = styled.div`
  padding: 2rem 2rem 4rem;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgb(80 78 78 / 50%);
`;

export const CardTitle = styled.h3`
  font-weight: 700;
  font-size: 30px;
  line-height: 34px;
  letter-spacing: 0.02em;
  display: flex;
  align-items: flex-start;
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 4px;
  }
`;

export const CardText = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.02em;
`;
