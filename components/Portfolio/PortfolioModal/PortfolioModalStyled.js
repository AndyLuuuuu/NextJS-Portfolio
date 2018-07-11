import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  transition: all 250ms ease-in-out;
  background-color: ${props => props.theme.darkerOverlay};
  opacity: ${props => (props.ShowModal ? "1" : "0")};
  transform: translateY(${props => (props.ShowModal ? "0%" : "-200%")});
  visibility: ${props => (props.ShowModal ? "visible" : "hidden")};
  padding: 0.5rem;
  top: 0;
  bottom: 0;
  z-index: 50;
  @media (max-height: 44rem) {
  }
`;

export const ModalImageCrop = styled.div`
  max-height: 30rem;
  overflow: hidden;
  text-align: center;
  @media (max-height: 44rem) {
    max-height: 20rem;
  }
  @media (max-height: 30rem) {
    max-height: 15rem;
  }
  @media (max-height: 25rem) {
    max-height: 10rem;
  }
`;

export const ModalImage = styled.img`
  width: 95%;
  @media (max-height: 44rem) {
    width: 80%;
  }
  @media (max-height: 30rem) {
    width: 60%;
  }
  @media (max-height: 25rem) {
    width: 50%;
  }
`;

export const ModalTitleLink = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 0.6rem;
  @media (max-height: 44rem) {
    width: 80%;
  }
  @media (max-height: 30rem) {
    width: 60%;
  }
  @media (max-height: 25rem) {
    width: 50%;
  }
`;

export const ModalLinkDiv = styled.div`
  display: flex;
`;

export const ModalLink = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  margin-left: 0.5rem;
  @media (max-height: 44rem) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const ModalTitle = styled.h3`
  color: ${props => props.theme.gold};
  font-size: 1.5rem;
  width: 95%;
  @media (max-height: 44rem) {
    font-size: 1.1rem;
  }
`;

export const ModalText = styled.p`
  font-size: 1rem;
  width: 95%;
  color: white;
  margin-bottom: 1.5rem;
  @media (max-height: 44rem) {
    width: 80%;
    margin-bottom: 0.8rem;
  }
  @media (max-height: 30rem) {
    width: 60%;
  }
  @media (max-height: 25rem) {
    width: 50%;
  }
  @media (max-width: 580px) and (max-height: 350px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 95%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  bottom: 2%;
  width: 30%;
  height: 3rem;
  font-size: 1rem;
  background-color: ${props => props.theme.gold};
  border: none;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
  @media (max-height: 44rem) {
    background: transparent;
    color: ${props => props.theme.gold};
  }
  @media (max-width: 580px) and (max-height: 350px) {
    background-color: transparent;
    color: ${props => props.theme.gold};
    bottom: 1%;
  }
  @media (max-width: 350px) and (max-height: 580px) {
    width: 30%;
  }
`;
