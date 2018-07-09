import React from "react";
import {
  ModalContainer,
  ModalTitle,
  ModalText,
  CloseModal
} from "./AboutModalStyled";

const AboutModal = props => {
  return (
    <ModalContainer
      expanded={props.expanded}
      left={props.left}
      gold={props.gold}
    >
      <ModalTitle>{props.title}</ModalTitle>
      <ModalText>{props.children}</ModalText>
      <CloseModal>Click to close.</CloseModal>
    </ModalContainer>
  );
};

export default AboutModal;
