import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: fit-content;
  transition: all 250ms ease-in-out;
  background-color: ${props => props.theme.darkerOverlay};
  opacity: ${props => (props.ShowModal ? "1" : "0")};
  transform: translateY(${props => (props.ShowModal ? "0%" : "-200%")});
  visibility: ${props => (props.ShowModal ? "visible" : "hidden")};
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 1rem;
  top: 0;
  bottom: 0;
  z-index: 50;
  @media (max-width: 62.6rem) {
  }
  @media (max-width: 55rem) {
  }
  @media (max-width: 43rem) {
  }
  @media (max-width: 37rem) {
  }
  @media (max-width: 31rem) {
  }
`;

export const ModalImageCrop = styled.div`
  max-height: 30rem;
  overflow: hidden;
  text-align: center;
`;

export const ModalImage = styled.img`
  width: 95%;
`;

export const ModalTitleLink = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

export const ModalLinkDiv = styled.div`
  display: flex;
`;

export const ModalLink = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  margin-left: 1rem;
`;

export const ModalTitle = styled.h3`
  color: ${props => props.theme.gold};
  font-size: 1.5rem;
  width: 95%;
`;

export const ModalText = styled.p`
  font-size: 1rem;
  width: 95%;
  color: white;
  margin-bottom: 1.5rem;
`;

export const CloseButton = styled.button`
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
`;
