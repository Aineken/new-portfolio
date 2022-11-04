import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 3rem;
  column-gap: 50px;
  place-items: center;
  justify-content: space-around;
  margin-bottom: 50px;
`;

export const Card = styled.div`
  width: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 3px 3px 20px rgb(80 78 78 / 50%);
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const CardTitle = styled.h3`
  font-size: ${(props) => (props.small ? "2.5rem" : "3rem")};
  font-weight: 500;
  padding: 20px 0 0;
  text-align: center;
  color: ${(props) => props.theme.colors.accent1};
`;

export const HR = styled.hr`
  width: 100px;
  height: 5px;
  margin: 20px auto;
  border: 0;
  background: ${(props) => props.theme.colors.accent1};
`;

export const CardImg = styled.img`
  width: 100%;
  height: 30%;
  object-fit: cover;
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
`;
export const CardInfo = styled.p`
  width: 100%;
  padding: 0 20px;
  color: #fff;
  line-height: 24px;
  text-align: justify;
  margin-bottom: 1rem;
`;

export const StackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
  gap: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;

export const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  gap: 30px;
`;
export const CardButton = styled.button`
  color: #d4c5;
  font-size: 1.5rem;
  padding: 1rem 3rem;
  background: #f345;
  transition: 0.5s ease;
  border-radius: 1.5rem;
  border: 0;
  margin: 0 3rem;
`;
