import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 20;
  background-color: ${props =>
    props.gold ? props.theme.gold : props.theme.blue};
  color: ${props => props.theme.black};
  display: flex;
  flex-flow: column;
  padding: 0 4rem;
  justify-content: center;
  transition: transform 250ms ease-in-out;
  transform-origin: ${props => (props.left ? "left" : "right")};
  transform: scale(${props => (props.expanded ? "1,1" : "0,1")});
  @media (min-width: 1001px) {
    display: none;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 3rem;
  @media (max-width: 38rem) {
    font-size: 2rem;
  }
  @media (max-width: 31rem) {
    font-size: 1.8rem;
  }
  @media (max-width: 23rem) {
    font-size: 1.5rem;
  }
  @media (max-height: 44rem) {
    font-size: 1.4rem;
  }
  @media (max-height: 37.5rem) {
    font-size: 1.3rem;
  }
  @media (max-width: 350px) and (max-height: 580px) {
    font-size: 1.1rem;
  }
`;

export const ModalText = styled.p`
  font-size: 1.7rem;
  @media (max-width: 38rem) {
    font-size: 1.5rem;
  }
  @media (max-width: 31rem) {
    font-size: 1.4rem;
  }
  @media (max-width: 28rem) {
    font-size: 1.2rem;
  }
  @media (max-height: 44rem) {
    font-size: 1.2rem;
  }
  @media (max-height: 40rem) {
    font-size: 1rem;
  }
  @media (max-height: 25rem) {
    font-size: 0.9rem;
  }
  @media (max-width: 350px) and (max-height: 580px) {
    font-size: 0.9rem;
  }
`;

export const CloseModal = styled.p`
  color: ${props => props.theme.black};
  position: absolute;
  bottom: 2%;
  width: fit-content;
  text-align: center;
  font-size: 1.1rem;
  left: 0;
  right: 0;
  margin: 1rem auto 0 auto;
  @media (max-height: 44rem) {
    font-size: 1rem;
  }
  @media (max-height: 37.5rem) {
    font-size: 0.8rem;
  }
  @media (max-height: 25rem) {
    font-size: 0.75rem;
  }
`;
