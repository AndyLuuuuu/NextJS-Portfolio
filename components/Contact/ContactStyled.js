import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
0% {color: #fc00ff}
100% {color: #00dbde}
`;

export const ContactContainer = styled.section`
  background-color: ${props => props.theme.white};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 700;
  @media (max-width: 55rem) {
    height: fit-content;
  }
`;

export const Content = styled.div`
  width: 80%;
  height: 80%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2.5fr 1fr;
  transform-style: preserve-3d;
  @media (max-width: 81rem) {
    grid-template-columns: 40% 60%;
    width: 93%;
  }
  @media (max-width: 68rem) {
    grid-template-columns: 1fr 1.5fr;
    width: 98%;
  }
  @media (max-width: 55rem) {
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
  }
`;

export const CTABox = styled.div`
  grid-area: 1/1/2/2;
  background-color: ${props => props.theme.gold};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: -10px 10px 10px ${props => props.theme.shadow};
  @media (max-width: 68rem) {
    box-shadow: 0 10px 10px ${props => props.theme.shadow};
  }
  @media (max-width: 55rem) {
    height: fit-content;
    background-color: initial;
    box-shadow: none;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 31rem) {
    width: 100%;
  }
`;

export const CTAContent = styled.div`
  display: flex;
  flex-flow: column;
  height: fit-content;
  align-content: center;
  padding: 3rem;
  @media (max-width: 87rem) {
    padding: 2rem;
  }
  @media (max-width: 55rem) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 31rem) {
    padding: 1rem;
  }
`;

export const CTATitle = styled.p`
  font-size: 4rem;
  color: ${props => props.theme.black};
  font-weight: 700;
  margin: 0.5rem 0;
  @media (max-width: 75rem) {
    font-size: 3rem;
  }
  @media (max-width: 55rem) {
    font-size: 4rem;
  }
  @media (max-width: 37rem) {
    font-size: 3.5rem;
  }
`;

export const CTAText = CTATitle.extend`
  font-size: 2rem;
  font-weight: 300;
  @media (max-width: 95rem) {
    font-size: 1.5rem;
  }
  @media (max-width: 75rem) {
    font-size: 1.3rem;
  }
  @media (max-width: 55rem) {
    font-size: 2rem;
  }
  @media (max-width: 37rem) {
    font-size: 1.5rem;
  }
`;

export const FollowBox = styled.div`
  content: "";
  grid-area: 2/1/2/2;
  background-color: ${props => props.theme.blue};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  align-content: center;
  box-shadow: -10px 10px 10px ${props => props.theme.shadow};
  @media (max-width: 81rem) {
    flex-flow: column;
  }
  @media (max-width: 68rem) {
    box-shadow: 0 10px 10px ${props => props.theme.shadow};
  }
  @media (max-width: 55rem) {
    height: 7rem;
    box-shadow: none;
    flex-flow: row;
  }
`;

export const FollowText = styled.p`
  font-size: 2.5rem;
  margin: 0.5rem 0.5rem;
  display: flex;
  @media (max-width: 87rem) {
    font-size: 2rem;
  }
  @media (max-width: 55rem) {
    font-size: 2.5rem;
  }
  @media (max-width: 43rem) {
    font-size: 2rem;
  }
  @media (max-width: 31rem) {
    display: none;
  }
`;

export const FollowIconContainer = styled.div``;

export const FollowIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.5rem;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
  @media (max-width: 87rem) {
    width: 2rem;
    height: 2rem;
  }
  @media (max-width: 55rem) {
    width: 3rem;
    height: 3rem;
    margin: 0 1rem;
    &:hover {
      transform: none;
    }
  }
  @media (max-width: 43rem) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const FormCompletedBack = styled.div`
  background-color: ${props => props.theme.black};
  grid-area: 1/2/3/3;
  padding: 1.5rem 6rem;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  transition: all 400ms ease-in-out;
  backface-visibility: hidden;
  transform: rotateY(${props => (props.flipped ? "0deg" : "180deg")});
  @media (max-width: 81rem) {
    padding: 1.5rem 3rem;
  }
  @media (max-width: 55rem) {
    display: none;
    transform: none;
  }
`;
export const FormCompletedTextContainer = styled.div``;
export const FormCompletedTitle = styled.p`
  font-size: 7rem;
  font-weight: 700;
  margin: 1.5rem 0;
  transition: color 500ms ease-in-out;
  animation: ${colorChange} linear infinite 2s;
  animation-direction: alternate-reverse;
  @media (max-width: 81rem) {
    font-size: 5rem;
  }
`;

export const FormCompletedText = styled.p`
  font-size: 2.2rem;
  animation: ${colorChange} linear infinite 2s;
  animation-direction: alternate-reverse;
  @media (max-width: 81rem) {
    font-size: 1.8rem;
  }
`;

export const FormCompletedButton = styled.img`
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  border: 2px solid ${props => props.theme.gold};
  border-radius: 50%;
  cursor: pointer;
`;
