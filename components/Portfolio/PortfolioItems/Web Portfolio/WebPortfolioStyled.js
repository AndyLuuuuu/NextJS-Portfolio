import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  grid-template-rows: repeat(auto-fill, min-max(100px, 1fr));
  position: relative;
  @media (max-width: 55rem) {
    display: flex;
    flex-flow: column;
  }
`;

export const WebPortfolioTitle = styled.h2`
  color: ${props => props.theme.black};
  grid-area: 1/1/3/3;
  justify-self: center;
  font-size: 2rem;
  margin: 2rem 0;
  @media (max-width: 62.6rem) {
    display: none;
  }
`;

export const WebItemContainer = styled.div`
  justify-self: center;
  margin: 1rem 0;
`;

export const WebItemImage = styled.img`
  width: 30rem;
  height: 20rem;
  @media (max-width: 75rem) {
    width: 28rem;
    height: 13rem;
  }
  @media (max-width: 62.6rem) {
    width: 26rem;
    height: 11rem;
  }
  @media (max-width: 55rem) {
    width: 30rem;
    height: auto;
  }
  @media (max-width: 43rem) {
    width: 30rem;
    height: auto;
  }
  @media (max-width: 37rem) {
    width: 25rem;
    height: auto;
  }
  @media (max-width: 31rem) {
    width: 20rem;
    height: auto;
  }
  @media (max-width: 23rem) {
    width: 18rem;
    height: auto;
  }
`;

export const WebTitleLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
`;

export const WebItemLinkDiv = styled.div`
  display: flex;
`;
export const WebItemLink = styled.img`
  height: 1.7rem;
  width: 1.7rem;
  margin-left: 1rem;
`;

export const WebItemTitle = styled.h3`
  color: ${props => props.theme.black};

  @media (max-width: 62.6rem) {
    display: none;
  }
`;

export const WebItemDesc = styled.p`
  width: 30rem;
  height: fit-content;
  @media (max-width: 75rem) {
    width: 28rem;
  }
  @media (max-width: 62.6rem) {
    display: none;
  }
`;
