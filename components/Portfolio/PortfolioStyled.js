import styled, { keyframes } from "styled-components";
import PatternBg from "../../static/images/portfolio/PatternBg.jpg";

export const PortfolioContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.black};
  display: flex;
  justify-content: center;
  perspective: 700;
  @media (max-width: 62.5rem) {
    display: none;
  }
`;

export const Content = styled.div`
  width: 80%;
  display: grid;
  grid-gap: 0.125rem;
  grid-template-rows: 1fr 80% 1fr;
  grid-template-columns: repeat(4, 1fr);
  transform-style: preserve-3d;
  @media (max-width: 81rem) {
    width: 95%;
  }
`;

export const WebPortfolio = styled.div`
  grid-area: 2/1/3/5;
  width: 100%;
  height: 100.1%;
  background-image: url(${PatternBg});
  background-position: center;
  background-size: cover;
  transition: transform 400ms ease-in-out;
  transform: rotateX(${props => (props.flipped ? "180deg" : "0deg")});
  backface-visibility: hidden;
  cursor: pointer;
`;

export const Title = styled.h2`
  color: ${props => props.theme.black};
  margin: 2rem 0 0 2rem;
  font-size: 2.5rem;
  width: fit-content;
`;

export const Subtitle = Title.extend`
  font-weight: 300;
  font-size: 2.2rem;
  margin-top: -1rem;
`;

export const WebPortBack = WebPortfolio.extend`
  background-image: none;
  background-color: white;
  transform: rotateX(${props => (props.flipped ? "0deg" : "-180deg")});
  overflow-y: ${props => (props.flipped ? "scroll" : "hidden")};
  cursor: initial;
`;

export const ScrollInstruction = styled.p`
  font-weight: 700;
  color: ${props => props.theme.black};
  font-size: 1.2rem;
  text-transform: uppercase;
  position: absolute;
  width: fit-content;
  margin: 0 auto;
  padding: 1rem;
  bottom: 5%;
  left: 0;
  right: 0;
  text-align: center;
  border: 2px solid ${props => props.theme.black};
  transition: all 150ms ease-in-out;
  &:hover {
    color: white;
    background-color: ${props => props.theme.black};
  }
`;
