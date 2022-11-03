import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 3rem 0 5rem;
  color: #fff;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    align-items: center;

    margin: 8px 0;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.02rem;
  color: #fff;
  margin: 4px 0 8px;
`;
export const ListText = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
  }
`;
