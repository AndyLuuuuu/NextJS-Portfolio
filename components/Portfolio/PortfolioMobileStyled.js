import styled from "styled-components";

export const PortfolioContainer = styled.section`
  width: 100vw;
  height: fit-content;
  background-color: ${props => props.theme.black};
  display: flex;
  flex-flow: column;
  align-items: center;
  @media (min-width: 62.6rem) {
    display: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`;

export const WebPortfolio = styled.div`
  grid-area: 1/1/2/5;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${props => props.theme.gold};
  font-size: 4rem;
  font-weight: 300;
  @media (max-width: 43rem) {
    font-size: 3.5rem;
  }
  @media (max-width: 37rem) {
    font-size: 3rem;
  }
  @media (max-width: 31rem) {
    white-space: nowrap;
    font-size: 2.5rem;
  }
  @media (max-width: 23rem) {
    white-space: nowrap;
    font-size: 2.2rem;
  }
`;

export const Subtitle = Title.extend`
  width: 100%;
  font-weight: 300;
  font-size: 2.5rem;
  margin-top: -0.5rem;
  text-align: right;
  color: ${props => props.theme.white};
  @media (max-width: 43rem) {
    font-size: 2rem;
  }
  @media (max-width: 31rem) {
    font-size: 1.8rem;
    margin-top: -0.3rem;
  }
  @media (max-width: 23rem) {
    white-space: nowrap;
    font-size: 1.6rem;
  }
`;

export const ViewMoreButton = styled.button`
  width: 15rem;
  height: 5rem;
  margin: auto;
  margin-bottom: 0;
  background-color: ${props => props.theme.gold};
  font-size: 2rem;
  border: none;
  &:active,
  &:focus {
    outline: none;
  }
  @media (max-width: 62.6rem) {
    font-size: 1.7rem;
  }
  @media (max-width: 55rem) {
    font-size: 1.5rem;
  }
  @media (max-width: 43rem) {
    height: 4rem;
  }
`;
