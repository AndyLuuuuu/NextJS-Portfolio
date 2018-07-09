import React from "react";
import {
  Container,
  WebPortfolioTitle,
  WebItemContainer,
  WebItemImage,
  WebTitleLink,
  WebItemLinkDiv,
  WebItemLink,
  WebItemTitle,
  WebItemDesc
} from "./WebPortfolioStyled";
import CloseButton from "../../../Button/Button";
import GithubIcon from "../../../../static/icons/github-link black.svg";
import LinkIcon from "../../../../static/icons/link black.svg";

const WebPortfolio = props => {
  return (
    <Container>
      <CloseButton size="2rem" alt="Close" />
      <WebPortfolioTitle>My Previous Projects</WebPortfolioTitle>
      {props.WebPortfolioData.slice(0, props.AmountOfItems).map(
        (currentItem, index, array) => (
          <WebItemContainer key={currentItem._id}>
            <WebItemImage
              src={currentItem.ProjectImageURL}
              onClick={event => props.SelectedItem(event)}
            />
            <WebTitleLink>
              <WebItemTitle>{currentItem.ProjectTitle}</WebItemTitle>
              <WebItemLinkDiv>
                <a href={currentItem.ProjectLink} target="_blank">
                  <WebItemLink src={LinkIcon} />
                </a>
                <a href={currentItem.ProjectGithub} target="_blank">
                  <WebItemLink src={GithubIcon} />
                </a>
              </WebItemLinkDiv>
            </WebTitleLink>

            <WebItemDesc>{currentItem.ProjectText}</WebItemDesc>
          </WebItemContainer>
        )
      )}
    </Container>
  );
};

export default WebPortfolio;
