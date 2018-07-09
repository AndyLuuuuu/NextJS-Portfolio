import React from "react";
import {
  ModalContainer,
  ModalImageCrop,
  ModalImage,
  ModalTitle,
  ModalText,
  ModalLink,
  ModalTitleLink,
  ModalLinkDiv,
  CloseButton
} from "./PortfolioModalStyled";
import GithubIcon from "../../../static/icons/github-link.svg";
import LinkIcon from "../../../static/icons/link.svg";

const PortfolioModal = props => {
  return (
    <ModalContainer ShowModal={props.ShowModal}>
      <ModalImageCrop>
        <ModalImage src={props.ModalItem.ProjectImageURL} />
      </ModalImageCrop>
      <ModalTitleLink>
        <ModalTitle>{props.ModalItem.ProjectTitle}</ModalTitle>
        <ModalLinkDiv>
          <a href={props.ModalItem.ProjectLink} target="_blank">
            <ModalLink src={LinkIcon} />
          </a>
          <a href={props.ModalItem.ProjectGithub} target="_blank">
            <ModalLink src={GithubIcon} />
          </a>
        </ModalLinkDiv>
      </ModalTitleLink>
      <ModalText>{props.ModalItem.ProjectText}</ModalText>
      <CloseButton onClick={props.closeModal}>Close</CloseButton>
    </ModalContainer>
  );
};

export default PortfolioModal;
