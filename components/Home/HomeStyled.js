import styled, { keyframes } from "styled-components";
import HomeHero from "../../static/images/home/Home-Hero.jpg";

const colorChange = keyframes`
0% {color: #fc00ff}
100% {color: #00dbde}
`;

const pulse = keyframes`
from {transform: scale(1)}
to {transform: scale(1.1)}`;

export const Background = styled.section`
  background-image: url(${HomeHero});
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${props => props.theme.black};
  font-weight: 300;
  color: ${props => props.theme.white};
  text-transform: uppercase;
  line-height: 0.95;
`;

export const TitleSpan = styled.span`
  color: ${props => props.theme.gold};
  font-weight: 700;
  font-size: 5.5rem;
  @media (max-width: 55rem) {
    font-size: 4rem;
  }
  @media (max-width: 44rem) {
    font-size: 3.5rem;
  }
  @media (max-width: 37.5rem) {
    font-size: 3rem;
  }
  @media (max-width: 28rem) {
    font-size: 2.5rem;
  }
  @media (max-height: 44rem) {
    font-size: 2.5rem;
  }
`;

export const FontChange = styled.span`
  font-family: "Euphoria Script", cursive;
  font-size: 5rem;
  text-transform: initial;
  @media (max-width: 55rem) {
    font-size: 4rem;
  }
  @media (max-width: 44rem) {
    font-size: 3rem;
  }
  @media (max-width: 37.5rem) {
    font-size: 2.5rem;
  }
  @media (max-width: 28rem) {
    font-size: 2rem;
  }
  @media (max-height: 44rem) {
    font-size: 2rem;
  }
`;

export const ScrollContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 2%;
  transition: all 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    animation: ${pulse} 750ms linear infinite;
    animation-direction: alternate-reverse;
  }
  @media (max-height: 25rem) {
    display: none;
  }
  @media (max-width: 350px) and (max-height: 580px) {
    font-size: 1.1rem;
  }
`;

export const ScrollInstruction = styled.p`
  font-weight: 700;
  color: white;
  font-size: 1.4rem;
  text-transform: uppercase;
  ${ScrollContainer}:hover & {
    animation: ${colorChange} 2s linear infinite;
    animation-direction: alternate-reverse;
  }
  @media (max-width: 37.5rem) {
    font-size: 1.2rem;
  }
  @media (max-height: 44rem) {
    font-size: 1.2rem;
  }
  @media (max-height: 37.5rem) {
    font-size: 1.1rem;
  }
  @media (max-height: 25rem) {
    font-size: 0.9rem;
  }
`;

export const ScrollInstructionArrow = styled.img`
  width: 3rem;
  height: 3rem;
  @media (max-width: 37.5rem) {
    width: 2rem;
    height: 2rem;
  }
  @media (max-height: 44rem) {
    width: 1.8rem;
    height: 1.8rem;
  }
  @media (max-height: 37.5rem) {
    width: 1.5rem;
    height: 1.5rem;
  }
  @media (max-height: 25rem) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;
